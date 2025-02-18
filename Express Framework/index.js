//CON NODE

// const fs  = require('node:fs');
// const http = require('node:http');

// const server = http.createServer((req, res) =>{
//     const read = fs.createReadStream('./static/index.html');
//     read.pipe(res)
// })
// server.listen(3000)
// console.log('Server on port: ' + 3000);

//CON EXPRESS

const express = require('express');

//app es lo mismo que en server

const app = express();

app.get('/',(req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(5500);
console.log('Server on port: ' + 3001);

 