# Introducción a los marcos web

Es común confundir los términos, pero es vital entender que **Node.js no es un marco**, sino un entorno de ejecución. Los marcos (frameworks) son las estructuras que se asientan sobre Node.js para facilitar el desarrollo de aplicaciones.

## Diferencia entre Entorno y Marco

- **Entorno de ejecución (Node.js)**: Es el hardware y software que permite ejecutar JavaScript en el servidor.
- **Marco web (Framework)**: Es el "esqueleto" que sustenta la aplicación, proporcionando herramientas para enrutamiento, autenticación y manejo de bases de datos.

---

## Estilos Arquitectónicos del Back-end

### 1. Model-View-Controller (MVC)

Patrón que divide la aplicación en tres componentes fundamentales para separar responsabilidades:

- **Modelo (Model)**: Administra los datos y la lógica de negocio; interactúa con la base de datos.
- **Vista (View)**: Se encarga de la presentación y representación visual de los datos.
- **Controlador (Controller)**: Regula el flujo de datos, procesa la entrada del usuario y comunica al Modelo con la Vista.

### 2. API REST

Permiten la comunicación entre servicios web bajo ciertas restricciones:

- **Independencia**: El código del cliente y el del servidor son totalmente autónomos.
- **Sin estado (Stateless)**: No se requiere que el servidor guarde el estado del cliente para comunicarse.
- **Comunicación**: Utilizan métodos HTTP (**GET, POST, PATCH, DELETE**) y suelen transferir cargas útiles en formato **JSON**.

---

## Marcos Web de Node.js Destacados

| Marco          | Características Principales                                                           | Ideal para...                                              |
| :------------- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| **Express.js** | Minimalista, flexible y con una curva de aprendizaje pequeña. Soporta MVC fácilmente. | Aplicaciones generales, enrutamiento y middleware.         |
| **Koa**        | Creado por el equipo de Express. Usa funciones asíncronas para eliminar callbacks.    | Aplicaciones complejas de alto rendimiento.                |
| **Socket.io**  | Permite comunicación bidireccional en tiempo real mediante WebSockets.                | Chats, juegos multijugador y videoconferencias.            |
| **Hapi.js**    | Enfocado en la seguridad y con muchos complementos oficiales integrados.              | Servidores proxy y APIs REST robustas.                     |
| **NestJS**     | Construido sobre Express, soporta TypeScript y sigue una arquitectura MVC estricta.   | Aplicaciones empresariales escalables (similar a Angular). |

## Resumen de aprendizaje

- Node.js es el entorno; los marcos son las herramientas de construcción.
- MVC organiza el código en Modelo, Vista y Controlador.
- Las API REST facilitan la comunicación independiente y sin estado entre servicios.
- Express sigue siendo el estándar más popular, mientras que NestJS lidera en el ámbito empresarial.
