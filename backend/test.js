const fetch = require('node-fetch');
fetch('http://localhost:8080/reportvideo', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({url:"https://ssh1997.github.io/test/test3.mp4"})
})
.then(res => res.json())
.then(json => console.log(json));