# Cuestionario graduado

¿Qué describe mejor las operaciones de red que realiza Node.js?

1. Las aplicaciones bloquean todas las operaciones de red para que se completen al mismo tiempo en el servidor
2. Las operaciones no bloqueadas regresan de forma sincronizada con un tiempo de procesamiento añadido en el servidor
3. **Las operaciones no bloqueadas retornan inmediatamente sin tiempo de procesamiento añadido en el servidor**
4. Las operaciones bloqueadas vuelven inmediatamente sin tiempo de procesamiento añadido en el servidor

Antes de que el framework Node.js reciba el mensaje de respuesta HTTP del servidor web remoto, devuelve inmediatamente un resultado para la llamada a la función http.request. ¿Qué indica este resultado?

1. El mensaje de respuesta se enviará correctamente.
2. ~~La función de devolución de llamada se ha llamado correctamente.~~
3. **Hay una solicitud en curso.**
4. El mensaje de retorno se enviará correctamente.

¿Qué parámetro es opcional en una petición HTTP?

1. ~~Parámetro de la función de localización~~
2. ~~Parámetro variable de recurso~~
3. ~~Parámetro de la variable de suceso~~
4. **Parámetro de la función de devolución de llamada**

¿Qué objeto pasan los módulos Node.js del SDK como primer parámetro en una función callback?

1. Destino
2. Identidad
3. **Error**
4. Ubicación

¿Qué pasa de vuelta en el manejador de devolución de llamada para indicar un retorno exitoso?

1. Error
2. Cadena vacía
3. **Objeto nulo**
4. código de estado 404

¿Qué función llama a la función de devolución de llamada resultCallback para devolver los resultados a la aplicación principal?

1. ~~agregar_contexto()~~
2. paso()
3. ~~resultado()~~
4. **http.request()**

¿Por qué la inversión de control puede ser un problema cuando se utilizan devoluciones de llamada?

1. La inversión de control crea la necesidad de devoluciones de llamada anidadas
2. **Las devoluciones de llamada a veces ceden el control a código de terceros, lo que puede dificultar la identificación de errores**
3. La inversión de control utiliza promesas que son difíciles de implementar
4. La inversión de control se utiliza cuando algo debe hacerse de forma secuencial lo que dificulta la legibilidad del código

JSON es el formato estándar para el intercambio de datos API. Qué relación tiene JSON con Node.js?

1. Archivo de metadatos
2. **Representación estándar de objetos nativos de JavaScript**
3. JSON_SET
4. Carpeta del modelo de datos común

Cuando se produce un error, ¿en qué estado se encuentra la promesa?

1. Abortado
2. **Rechazado**
3. Resuelto
4. Pendiente

El paquete axios maneja peticiones HTTP en Node.js y devuelve un objeto promesa. El objeto promesa tiene un método que se llama después de que la promesa se complete. ¿Qué método utiliza el objeto promesa?

1. **entonces**
2. si no
3. o
4. si
