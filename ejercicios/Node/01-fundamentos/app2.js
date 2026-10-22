//const fs = require('fs'); CJS
import fs from 'node:fs'; //EMS


//Modo bloqueante
const data = fs.readFileSync('README.md', 'utf-8')
console.log(data);