/* 설치한 express 모듈 불러오기 */
const express = require('express') // 서버를 위한 모듈

/* 설치한 socket.io 모듈 불러오기 */
const socket = require('socket.io') // 실시간 통신을 위한 모듈

const bodyParser = require('body-parser')

/* Node.js 기본 내장 모듈 불러오기 */
const http = require('http')

/* Node.js 기본 내장 모듈 불러오기 */
const fs = require('fs')

/* express 객체 생성 */
const app = express()

/* express http 서버 생성 */
// const server = http.createServer()
const server = http.createServer(app)

/* 생성된 서버를 socket.io에 바인딩 */
const io = socket(server)

app.use(bodyParser.json())

app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))

app.get('/videolist', function (req, res) {
    const dataBuffer = fs.readFileSync('./static/database/video.json')
    const dataJson = dataBuffer.toString()
    const videolist = JSON.parse(dataJson)

    res.send(videolist.data)
})

app.post('/reportvideo', function (req, res) {
    let videoURL = req.body.videoURL

    var sightengine = require('sightengine')('1286476915', 'jhNZRwJE8VdmD27GquKM');

    sightengine.check(['nudity']).video_sync(videoURL).then(function (result) {
        // read the output (result)
        let data = result.data.frames
        for (let i = 0; i < data.length; i++) {
            let obj_length = Object.keys(data[i].nudity).length
            if (data[i].nudity.raw > 0.6 || data[i].nudity.partial > 0.6 || obj_length === 4) {
                const dataBuffer = fs.readFileSync('./static/database/video.json')
                const dataJson = dataBuffer.toString()
                const videolist = JSON.parse(dataJson)
                const videolen = videolist.data.length;

                for (let i = 0; i < videolen; i++) {
                    if (videolist.data[i].video === videoURL) {
                        videolist.data[i].isBlock = "true"
                        break
                    }
                }

                const stringJson = JSON.stringify(videolist);

                fs.writeFileSync('./static/database/video.json', stringJson)
                res.send({ isBlock: true })
                return
            }
        }

        res.send({ isBlock: false })

    }).catch(function (err) {
        console.log(err)
    })
})

/* Get 방식으로 / 경로에 접속하면 실행 됨 */
app.get('/', function (request, response) {
    fs.readFile('./static/index.html', function (err, data) {
        if (err) {
            response.send('에러')
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data)
            response.end()
        }
    })
})

io.sockets.on('connection', function (socket) {

    /* 새로운 유저가 접속했을 경우 다른 소켓에게도 알려줌 */
    socket.on('newUser', function (name) {
        console.log(name + ' 님이 접속하였습니다.')

        /* 소켓에 이름 저장해두기 */
        socket.name = name

        /* 모든 소켓에게 전송 */
        io.sockets.emit('update', { type: 'connect', name: 'SERVER', message: name + '님이 접속하였습니다.' })
    })

    /* 전송한 메시지 받기 */
    socket.on('message', function (data) {
        /* 받은 데이터에 누가 보냈는지 이름을 추가 */
        data.name = socket.name

        console.log(data)

        /* 보낸 사람을 제외한 나머지 유저에게 메시지 전송 */
        socket.broadcast.emit('update', data);
    })

    /* 접속 종료 */
    socket.on('disconnect', function () {
        console.log(socket.name + '님이 나가셨습니다.')

        /* 나가는 사람을 제외한 나머지 유저에게 메시지 전송 */
        socket.broadcast.emit('update', { type: 'disconnect', name: 'SERVER', message: socket.name + '님이 나가셨습니다.' });
    })
})


// const host = 'localhost';
// const port = 8080;
// server.listen(port, host, function() {})

/* 서버를 8080 포트로 listen */
server.listen(8080, function () {
    console.log('서버 실행 중..')
})
