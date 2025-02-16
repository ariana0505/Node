
const fs  = require("node:fs");
//lee el directorio actual (.)
//no se puede utilizar el existsSync cuando es promises
console.log(`Existe la ruta 5.path.js: ${fs.existsSync('./5.path.js')}`); 

fs.readdir('.',(error,files)=>{
    if(error){
        console.log('Error al leer el directorio: ',error)
    }
    
    files.forEach(file => {
        console.log(file);
    })
})