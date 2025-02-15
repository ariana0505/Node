import {readFile} from 'node:fs/promises'

Promise.all([
    readFile('./text.txt','utf-8'),
    readFile('./text.txt2','utf-8')
]).then(([text1,text2]) => {
    console.log(text1);
    console.log(text2)
})
