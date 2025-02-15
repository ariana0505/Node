const fs = require('node:fs') // se recomienda poner node:
// espera que obtenga es estado del archivo (sincrono)
const stats = fs.statSync('./text.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)