const fs = require("fs");

const dataBuffer = fs.readFileSync('./datalink.txt');
const datas = dataBuffer.toString().split('\r\n');


const data = {
    title : "videoList",
    data : datas.map((v) => {
        return {
            id : Math.floor(Math.random() * 10000).toString(),
            title : "video"+Math.floor(Math.random() * 10000),
            thumbnail : "imgLink",
            video : v,
            isBlock : "false"
        }
    })
}

fs.writeFileSync('./video.json', JSON.stringify(data));

// console.log(JSON.stringify(data));

