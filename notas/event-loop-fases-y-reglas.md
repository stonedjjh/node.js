# El Event Loop en Node.js: Fases, Colas y Reglas de Ejecucion

> **Fuentes y Reconocimiento:**
> - Curso: *NodeJS: De cero a experto* impartido por **Fernando Herrera** (Udemy).
> - Articulo y guia visual de arquitectura: [A Visual Guide to NodeJS Event Loop - Builder.io](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop).
> - Documentacion oficial de `libuv` y Node.js.

---

## 1. Reglas de Prioridad del Event Loop

El orden de resolucion de tareas en cada ciclo (tick) sigue estas 9 reglas secuenciales:

1. **Microtasks iniciales:** Los callbacks en el `microtask queue` se ejecutan primero (antes de iniciar las fases principales).
2. **Timer Queue:** Todos los callbacks preparados dentro del `timer queue` (`setTimeout`, `setInterval`) se ejecutan.
3. **Microtasks tras Timers:** Los callbacks en el `microtask queue` (si los hay) se ejecutan inmediatamente despues de los callbacks de timers:
   - **1.º:** Tareas en el `nextTick queue` (`process.nextTick`).
   - **2.º:** Tareas en el `promise queue` (`Promise.resolve().then(...)`).
4. **I/O Queue:** Se ejecutan los callbacks de operaciones de Entrada/Salida (disco, red, sistema).
5. **Microtasks tras I/O:** Se ejecutan nuevamente los callbacks del `microtask queue` (primero `nextTick`, luego `promise`).
6. **Check Queue:** Todos los callbacks en el `check queue` (`setImmediate`) se ejecutan.
7. **Microtasks tras Check:** Los callbacks en el `microtask queue` se ejecutan despues de cada callback en el `check queue` (siguiendo el orden: `nextTick` y luego `promise`).
8. **Close Queue:** Se ejecutan todos los callbacks de cierre (`close handlers`, ej. `socket.on('close', ...)`).
9. **Microtasks finales:** Por una ultima vez en el mismo ciclo, los `microtask queues` se ejecutan de la misma forma (`nextTick` y luego `promise queue`).

---

## 2. Clasificacion de Colas (Queues)

Podemos dividir las colas en dos categorias fundamentales:

### A. Macrotask Queues (Fases principales de libuv)
1. **Timers:** Maneja callbacks programados por `setTimeout()` y `setInterval()`.
2. **I/O Callbacks:** Ejecuta callbacks diferidos de red, errores de sistema, lectura/escritura de archivos terminadas.
3. **Idle / Prepare:** Uso exclusivamente interno de `libuv`.
4. **Poll (I/O Polling):** Recupera nuevos eventos de I/O y calcula cuanto tiempo debe bloquearse el hilo esperando eventos.
5. **Check:** Aloja callbacks registrados con `setImmediate()`.
6. **Close Callbacks:** Eventos de cierre como `socket.destroy()` o `readableStream.on('close')`.

### B. Microtask Queues (Colas de Maxima Prioridad en Node.js)
No pertenecen propiamente a las fases de `libuv`, sino que son gestionadas directamente por Node.js entre fase y fase:
- **`nextTick queue` (`process.nextTick`):** Maxima prioridad absoluta. Interrumpe cualquier fase tan pronto el Call Stack actual queda vacio.
- **`promise queue`:** Resoluciones de promesas nativas (`Promise.then()`, `catch()`, `finally()`, y continuaciones de funciones `async/await`).

---

## 3. Ejemplo Practico de Analisis

Tomando el ejercicio de `app4.js`:

```javascript
console.log('Inicio de programa'); // 1. Sincrono directo al Call Stack

setTimeout(() => {
    console.log('Primer Timeout');  // 5. Entra al Timer Queue con 3000ms
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout'); // 3. Entra al Timer Queue con 0ms (primer timer disponible)
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout');  // 4. Entra al Timer Queue con 0ms (segundo timer disponible)
}, 0);

console.log('Fin de programa');    // 2. Sincrono directo al Call Stack
```

### Flujo de Ejecucion en Consola:
```text
Inicio de programa
Fin de programa
Segundo Timeout
Tercer Timeout
Primer Timeout  <-- (3 segundos despues)
```

### ¿Por que los `setTimeout(..., 0)` no se ejecutan antes de 'Fin de programa'?
Porque el codigo sincronico que corre en el hilo principal (Call Stack) **nunca puede ser interrumpido a mitad de camino**. Hasta que el archivo principal no termina de evaluarse por completo y el Call Stack queda en cero, el Event Loop no da su primera vuelta para vaciar el `timer queue`.

---

## 4. Preguntas Claves de Arquitectura (Call Stack vs libuv)

### Pregunta 1
> **¿En que momento decide Node ejecutar la funcion callback asociada en la pila de llamadas (callstack)?**  
> **Respuesta:**  
> Los callbacks son ejecutados **unicamente cuando el callstack esta completamente vacio**.

---

### Pregunta 2
> **¿Node espera a que la pila de llamadas este vacia antes de ejecutar un callback o interrumpe el flujo normal de ejecucion para ejecutar el callback?**  
> **Respuesta:**  
> **El flujo normal de ejecucion no se interrumpira para ejecutar una funcion de devolucion de llamada (callback).**

---

### Pregunta 3
> **¿Que pasa con otros metodos asincronos como setTimeout y setInterval, que tambien retrasan la ejecucion de un callback?**  
> **Respuesta:**  
> **Los callbacks de setTimeout y setInterval tienen prioridad (dentro de las fases de macrotasks del Event Loop), pero NO interrumpen el flujo normal de ejecucion.**

---

### Pregunta 4
> **Si dos tareas asincronas como setTimeout y readFile se completan al mismo tiempo, ¿como decide Node que callback ejecutar primero en la pila de llamadas? ¿Uno tiene prioridad sobre el otro?**  
> **Respuesta:**  
> **Los callbacks de temporizador (Timer Queue) se ejecutan antes que las devoluciones de llamada de I/O (I/O Queue), incluso si ambas estan listas exactamente al mismo tiempo.**

### Implicacion Tecnica:
En el Event Loop de `libuv`, el orden de las fases es determinista y estricto: la fase de **Timers** precede siempre a la fase de **I/O Polling / Callbacks**. Por tanto, aunque el sistema operativo haya terminado de leer el archivo en el mismo instante en que el timer expiro, Node siempre procesara primero los timers listos antes de avanzar a vaciar la cola de I/O.




