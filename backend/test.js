const fetch = require('node-fetch');
fetch('http://localhost:8080/reportvideo', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({url:"https://storage.coverr.co/videos/FvKt02GwvrkOUI7UKv4NePv1WR6Xc4JaV/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTk3MzkwMzIzfQ.OanUSu01KXDO2U2VgUzQsH5mX7ie7PDasb2pVAh1LPU"})
})
.then(res => res.json())
.then(json => console.log(json));