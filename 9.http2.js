const htpp = require('node:http')
const { findAvailablePort } = require('./10.free-port')

console.log(process.env)

const puertoDeseado = process.env.PORT ?? 3000

const server = htpp.createServer((req,res)=>{
    console.log('Respuesta recivida')
    res.end("Hola mundo")
})

findAvailablePort(puertoDeseado).then(port =>{
    server.listen(port,()=>{
        console.log("server listening on port: "+port);
    })
})