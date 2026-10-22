# Notas y Laboratorios de Estudio: Node.js

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License-MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

Este repositorio contiene mis notas de estudio, resumenes conceptuales, hojas de trucos, ejercicios practicos y proyectos de laboratorio generados durante mi formacion en el ecosistema de **Node.js** y **Express**. Sirve como espacio personal de referencia tecnica y experimentacion.

---

## Reconocimiento y Fuentes de Aprendizaje

El contenido teorico, la progresion didactica y los laboratorios integrados en este repositorio provienen de las siguientes fuentes de formacion:

1. **Fernando Herrera**: *NodeJS: De cero a experto* (Udemy).
2. **IBM Developer Skills Network / Coursera**: *Desarrollo de aplicaciones back-end con Node.js y Express*.
3. **KeepCoding**: *Curso de Fundamentos y Desarrollo en Node.js*.
4. **Builder.io**: Articulos tecnicos y guias visuales sobre la arquitectura interna de Node.js.

Todo el reconocimiento y credito respecto a la estructura academica y material original pertenece a sus respectivos autores e instituciones.

---

## Estructura del Repositorio

El proyecto esta organizado de forma modular segun la naturaleza de cada recurso:

### Cursos y Formaciones
- [cursos/IBM/desarrollo-backend-express](./cursos/IBM/desarrollo-backend-express): Modulos 1 al 3 del curso de IBM, abarcando creacion de servidores HTTP, asincronia (Callbacks, Promesas, Async/Await), Express, enrutamiento, middlewares y laboratorios CRUD con autenticacion.
- [cursos/keepcoding/fundamentos-node](./cursos/keepcoding/fundamentos-node): Ejercicios y fundamentos de JavaScript en servidor, closures, prototipos, EventEmitters, control de flujo asincrono y aplicaciones base con Express.

### Notas y Referencias
- [notas/](./notas): Indice modular con guias sobre el Event Loop, I/O bloqueante vs no bloqueante, PNPM y seguridad, NVM y comandos esenciales.

### Carpetas Tematicas de Especializacion
- [ejercicios/](./ejercicios): Scripts, katas y practicas organizadas por autor o curso (ej. `ejercicios/fernando-herrera/`).
- [laboratorios/](./laboratorios): Proyectos guiados, microservicios y practicas paso a paso.
- [librerias/](./librerias): Pruebas, apuntes y casos de uso con paquetes npm de utilidad (ej. Lodash, Chance, Axios, Dayjs).
- [frameworks/](./frameworks): Ejemplos y arquitecturas orientadas a frameworks del ecosistema (Express, Fastify, NestJS).
- [utilidades/](./utilidades): Helpers, scripts de automatizacion y herramientas de soporte.
- [certificados/](./certificados): Archivos y comprobantes digitales de certificaciones obtenidas.

---

## Requisitos Previos

Para ejecutar los ejemplos y laboratorios contenidos en este repositorio se requiere:

- **Node.js**: Version 18.x LTS o superior (recomendado 20.x o superior).
- **npm** o **pnpm**: Gestores de paquetes para el ecosistema Node.js.
- **Git**: Para el control de versiones local.

Para verificar tus versiones instaladas:
```bash
node -v
npm -v
pnpm -v
```

---

## Certificacion y Logros

Las certificaciones, diplomas y acreditaciones obtenidas a lo largo de las distintas rutas de aprendizaje se archivaran en la carpeta [certificados/](./certificados).

---

## Licencia

Este repositorio se distribuye bajo la licencia **MIT**. Consulte el archivo [LICENSE](./LICENSE) para mas detalles.
