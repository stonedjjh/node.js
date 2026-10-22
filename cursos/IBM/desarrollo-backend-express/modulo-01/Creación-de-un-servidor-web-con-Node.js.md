# Creación de un servidor web con Node.js

Node.js es un marco de programación del lado del servidor que utiliza JavaScript. Se caracteriza por ser un entorno de un solo subproceso que gestiona las operaciones de entrada/salida (E/S) mediante eventos.

## Características del Entorno

- **No bloqueante:** En lugar de detener el proceso, se utilizan funciones de devolución de llamada (callbacks) para gestionar los resultados de operaciones asíncronas.
- **Escalabilidad:** Es ideal para crear aplicaciones simultáneas y escalables gracias a su bucle de eventos.
- **Módulos:** En Node.js, cada archivo JavaScript se considera un módulo y un paquete puede contener uno o más de ellos.

## El Módulo HTTP

El motor de ejecución incluye módulos de utilidad, siendo el módulo **HTTP** el fundamental para crear servidores que escuchen solicitudes y devuelvan respuestas.

## Pasos para crear un servidor sencillo

1. **Instanciación:** Se utiliza la función `http.createServer()` para crear el objeto del servidor.
2. **Gestión de solicitudes:** La función recibe una función de devolución de llamada (callback) que procesa los mensajes entrantes y genera la respuesta.
3. **Configuración del puerto:** Se debe llamar a la función `listen()` especificando un puerto (por ejemplo, el 8080) para que el servidor comience a recibir tráfico.

En resumen, con un conjunto mínimo de herramientas y el módulo HTTP, Node.js permite desarrollar rápidamente aplicaciones web receptivas.
