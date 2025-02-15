const fs = require('node:fs')//Forma recomendada 
//espera que termine de leer el path con encoder

console.log("Leyendo el primer archivo..")
const text = fs.readFileSync('./text.txt','utf-8')
console.log(text)

console.log("No puedo hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo..")
const text2 = fs.readFileSync('./text2.txt','utf-8')
console.log(text2)