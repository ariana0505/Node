const http = require('node:http') // protocolo HTTP


const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})
// el puerto 0 es el primer puerto que encuentre disponible
server.listen(0,()=>{
    console.log("Server escucha en el puerto htpp://localhost:"+ server.address().port);
})