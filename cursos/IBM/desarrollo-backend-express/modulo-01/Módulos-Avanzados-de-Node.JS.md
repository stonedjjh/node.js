# Módulos Avanzados de Node.JS

Después de completar esta lectura, podrás describir los tres tipos de módulos de Node.js. También podrás explicar para qué se pueden utilizar varios módulos centrales destacados.

Las bibliotecas son lo mismo que los módulos en lo que respecta a Node.js. Las bibliotecas contienen código que ha sido desarrollado y que puede ser reutilizado en toda una aplicación. Hay tres tipos de módulos: núcleo, local y de terceros.

Los módulos centrales de Node.js forman una biblioteca mínima. Contienen la funcionalidad mínima necesaria para desarrollar aplicaciones de Node.js.

Los módulos locales son el siguiente tipo de módulo de Node.js. Los módulos locales son los módulos escritos por ti y el equipo de desarrollo como parte de la creación de tu aplicación de Node.js.

Los módulos de terceros están disponibles en línea y han sido creados por la comunidad de Node.js en el back-end. Estas bibliotecas están disponibles para su uso según lo establecido por sus licencias. Muchos módulos de terceros están en el dominio público, lo que no requiere una licencia, o son de código abierto. Los recursos de código abierto suelen estar gobernados por la licencia "copyleft", que permite al desarrollador usar y modificar el código, pero también requiere que el desarrollador comparta su trabajo bajo la misma licencia.

Los más importantes de los módulos centrales son http, path, fs, os, util, url y querystring. Vamos a discutir brevemente cada uno de ellos y proporcionar ejemplos de código.

El módulo http proporciona métodos para transferir datos a través de HTTP. Para incluir el módulo http in tu aplicación, debes requerirlo.

Aquí hay un código de ejemplo que crea una instancia de un servidor utilizando el módulo http. Este código utiliza el método http.createServer() para crear la instancia del servidor.

```javascript
let http = require("http");
http
  .createServer(function (req, res) {
    res.write("hola desde el servidor"); //escribe una respuesta al cliente
    res.end(); //fin de la respuesta del servidor
  })
  .listen(6000); //la instancia del servidor escucha solicitudes http en el puerto 6000
```

El módulo fs se utiliza para interactuar con un sistema de archivos. No necesita ser instalado porque es parte del núcleo de Node.js y simplemente puede ser requerido. El siguiente código lee un archivo local de manera asíncrona utilizando el módulo fs y imprime el contenido del archivo en la consola.

```JavaScript
const fs = require('fs');
// Lee de manera asíncrona el archivo 'sample.txt'
fs.readFile('sample.txt', 'utf8', (err, data) => {
if (err) {
console.error(err);
return;
}
// Imprime el contenido de 'sample.txt' en la consola
console.log(data);
});
```

El módulo fs también se puede utilizar para entrada y salida, conocido como I/O. Los métodos del módulo fs se pueden utilizar para recuperar información de o escribir datos en un archivo externo.

```JavaScript
const fs = require('fs');
// Lee el contenido del archivo '/content.md' de manera sincrónica y lo almacena en 'data'
const data = fs.readFileSync('/content.md', 'utf8');
// Imprime el contenido de 'content.md' en la consola
console.log(data);
```

El módulo OS proporciona métodos para recuperar información del sistema operativo en el que se está ejecutando la aplicación e interactuar con él. Este es un código de muestra del módulo OS que obtiene la plataforma y la arquitectura de la computadora.

```JavaScript
let os = require('os');
console.log("Información de la plataforma del sistema operativo de la computadora : " + os.platform());
console.log("Información de la arquitectura del sistema operativo de la computadora: " + os.arch());
```

El módulo path te permite recuperar y manipular rutas de directorios y archivos.
El siguiente código recupera la última parte de una ruta de archivo dada y imprime ese valor en la consola:

```JavaScript
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //salida home.html en la consola
```

El módulo util de Node.js está destinado para uso interno para llevar a cabo tareas como depuración y desuso de funciones. Supongamos que deseas depurar un programa para contar el número de iteraciones en un bucle. Podrías usar el método util.format() de la siguiente manera:

```JavaScript
let util = require('util');
let str = 'El bucle se ha ejecutado %d vez(es).';
for (let i = 1; i <= 10; i++) {
console.log(util.format(str, i)); //salida 'El bucle se ha ejecutado i vez(es)'
}
```

El módulo URL se utiliza para dividir una dirección web en partes legibles. Aquí hay un código de muestra que devuelve el valor del objeto de consulta "firstName" de la URL dada.

```JavaScript
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //devuelve un objeto: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //salida Clark
```

El módulo querystring proporciona métodos para analizar la cadena de consulta de una URL.
Por ejemplo,

```JavaScript
let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //devuelve Clark
```

También hay varios paquetes de terceros útiles para usar con Node.js. Algunos de ellos incluyen AsyncJS, Axios y Express. Estas bibliotecas se discutirán más adelante en el curso.
