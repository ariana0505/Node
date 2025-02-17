const htpp = require('node:http')

console.log(process.env)

const port = process.env.PORT ?? 3000

const server = htpp.createServer((req,res)=>{
    console.log('Respuesta recivida')
    res.end("Hola mundo")
})

//PRENDER SERVIDOR
server.listen(port,()=>{
    console.log("server listening on port: "+ port);
})
