const fetch = require('node-fetch');
fetch('http://localhost:8080/reportvideo', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({id:"1234"})
})
.then(res => res.json())
.then(json => console.log(json));