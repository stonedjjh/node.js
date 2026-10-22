//const fs = require('fs'); CJS
import fs from 'node:fs'; //EMS


//Modo bloqueante
const data = fs.readFileSync('README.md', 'utf-8')

//Sustitucion de React por Angunlar
const newData = data.replace(/React/ig, 'Angular');

//Creación de nuevo archivo
fs.writeFileSync('README-Angular.md', newData)