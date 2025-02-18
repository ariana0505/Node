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

app.get('/about', (req,res)=>{
    res.send('Hola desde la proimera ruta :D');
})
app.get('/weathert', (req,res)=>{
    res.end('Hola desde la segunda ruta c:');
})

app.use((req,res)=>{//cuando no se encuentra ninguna de las rutas anteriores se ejetura esta como un auxiliar
    res.send('No se encontro tu pagina')
})

app.listen(5500);
console.log('Server on port: ' + 5500);

 