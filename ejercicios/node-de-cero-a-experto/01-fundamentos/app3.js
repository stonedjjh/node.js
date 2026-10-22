//Ejercicio para contar palabras
//const fs = require('fs'); CJS
import fs from 'node:fs'; //EMS


//Modo bloqueante
const content = fs.readFileSync('README.md', 'utf-8')


const wordCount = content.split(' ')

const reactWordCount = content.match(/react/gi ?? []).length

//Creación de nuevo archivo
console.log('Palabras: ', wordCount.length)

console.log('Palabras react: ', reactWordCount)