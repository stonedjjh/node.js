# Bloqueante (Blocking) vs No Bloqueante (Non-Blocking) en Node.js

> Fuente oficial: [Node.js - Overview of Blocking vs Non-Blocking](https://nodejs.org/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)

## 1. Concepto Fundamental de I/O

En Node.js, **I/O (Entrada / Salida)** se refiere primordialmente a la interaccion con el **disco** (sistema de archivos) y la **red** (peticiones HTTP, bases de datos, sockets), gestionado a bajo nivel por la biblioteca en C llamada **`libuv`**.

---

## 2. Definicion de Bloqueante (Blocking)

Se considera **bloqueante** cuando la ejecucion de codigo JavaScript adicional en el proceso de Node.js debe detenerse y esperar hasta que una operacion que no es de JavaScript (como una lectura de disco o llamada a red) se complete.

- **Causa tecnica:** El **Event Loop** es incapaz de continuar ejecutando JavaScript mientras ocurre una operacion bloqueante.
- **Aclaracion sobre CPU:** El codigo JavaScript que presenta bajo rendimiento debido a calculos intensivos de CPU (ej. bucles infinitos, criptografia pesada sin workers) no se clasifica tecnicamente como bloqueo de I/O, aunque produce el mismo efecto (congela el hilo).
- **Convencion en Node.js:** Los metodos sincronos y bloqueantes de la biblioteca estandar de Node.js llevan el sufijo **`Sync`** (por ejemplo: `fs.readFileSync`, `fs.writeFileSync`).

---

## 3. Comparativa de Codigo

### Modo Bloqueante (Sincrono)
```javascript
const fs = require('node:fs');

const data = fs.readFileSync('/archivo.md'); // Se bloquea aqui hasta leer todo el archivo
console.log(data);
hacerMasTrabajo(); // Se ejecutara despues de console.log
```
- **Desventaja:** Si la lectura toma tiempo o el archivo es grande, todo el servidor queda congelado durante ese lapso. Ademas, cualquier excepcion no capturada tumba el proceso.

### Modo No Bloqueante (Asincrono con Callback)
```javascript
const fs = require('node:fs');

fs.readFile('/archivo.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
hacerMasTrabajo(); // Se ejecuta ANTES de console.log
```
- **Ventaja:** `fs.readFile` delega el trabajo de disco a `libuv` y devuelve el control al hilo inmediatamente. `hacerMasTrabajo()` se ejecuta sin esperar el I/O, permitiendo mayor capacidad de procesamiento (*higher throughput*).

---

## 4. Concurrencia y Capacidad de Procesamiento (Throughput)

La ejecucion de JavaScript en Node.js es de **hilo unico (single-threaded)**. La concurrencia se refiere a la habilidad del Event Loop para ejecutar funciones callback una vez que otras tareas de I/O finalizan.

### Ejemplo practico de capacidad:
- Si cada peticion a un servidor web toma **50 ms** en total, donde **45 ms** corresponden a una consulta a base de datos (I/O) y **5 ms** a procesamiento JavaScript:
  - **Con modelo bloqueante:** El hilo se congela durante los 45 ms esperando la base de datos. Solo puede atender ~20 peticiones por segundo.
  - **Con modelo no bloqueante:** El hilo queda libre durante los 45 ms para atender otras peticiones entrantes mientras la base de datos responde. La capacidad de concurrencia aumenta de forma masiva sin crear hilos adicionales de sistema operativo.

---

## 5. El Peligro de Mezclar Codigo Bloqueante y No Bloqueante

Un patron peligroso ocurre cuando se combinan metodos asincronos con metodos sincronos sobre el mismo recurso:

```javascript
// ANTIPATRON PELIGROSO
const fs = require('node:fs');

fs.readFile('/archivo.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.unlinkSync('/archivo.md'); // Elimina el archivo sincronicamente
```

### ¿Por que falla?
`fs.unlinkSync` se ejecutara casi con certeza **antes** de que `fs.readFile` termine de leer los datos del disco, lo que eliminara el archivo antes de leerlo y provocara un error de tipo `ENOENT`.

### Solucion Correcta (100% No Bloqueante y Ordenada)
Anidar o encadenar las dependencias logicas dentro del callback o mediante Promesas (`fs/promises` con `async/await`):

```javascript
// PATRON RECOMENDADO
const fs = require('node:fs');

fs.readFile('/archivo.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);

  fs.unlink('/archivo.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
});
```

---

## 6. Recursos Adicionales
- [libuv](https://libuv.org/): Biblioteca multiplataforma de soporte enfocada en I/O asincrono.
- [Node.js Official Documentation - Asynchronous Work](https://nodejs.org/learn/asynchronous-work)
