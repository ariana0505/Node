const fs  = require("node:fs/promises");

fs.readdir('.')
    .then(files =>{
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(error =>{
        if (error){
            console.error('Error al leer el directorio: ',error);
            return
        }
    })
