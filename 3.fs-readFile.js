const { error } = require('node:console');
const fs = require('node:fs');//Forma recomendada 
const { text } = require('node:stream/consumers');
//espera que termine de leer el path con encoder

console.log("Leyendo el primer archivo..")
fs.readFile('./text.txt','utf-8',(error,text)=>{ //<-- Ejecuta estee colback cuando termine de leerse
    console.log(text);
})

console.log("hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo..")
fs.readFile('./text2.txt','utf-8',(error,text)=>{ //<-- Ejecuta estee colback cuando termine de leerse
    console.log(text);
})
