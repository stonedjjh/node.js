# Comandos de node.js

## node

Node.js es un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor V8 de Chrome.

- Permite ejecutar código JavaScript fuera del navegador, lo que facilita la creación de aplicaciones de red escalables y de alto rendimiento.

- El comando `node` se utiliza para:
  - Ejecutar archivos JavaScript (.js) desde la línea de comandos
  - Iniciar un REPL (Read-Eval-Print Loop) interactivo para probar código JavaScript
  - Ejecutar scripts y aplicaciones del lado del servidor
  - Gestionar paquetes y dependencias mediante npm (Node Package Manager)

Uso básico:

- `node archivo.js` - Ejecuta un archivo JavaScript
- `node` - Inicia el modo interactivo REPL
- `node -v` - Muestra la versión de Node.js instalada
- `node --help` - Muestra las opciones disponibles del comando
  /

## npm

npm (Node Package Manager) es el gestor de paquetes predeterminado para Node.js.

- Permite a los desarrolladores instalar, compartir y gestionar bibliotecas y módulos de JavaScript.

### init -y

El comando `npm init -y` se utiliza para crear un archivo `package.json` predeterminado en el directorio actual sin necesidad de responder a las preguntas interactivas.

- El archivo `package.json` contiene metadatos importantes sobre el proyecto, como el nombre, la versión, las dependencias y los scripts.

Uso:

- `npm init -y` - Crea un archivo `package.json` con valores predeterminados

- Esto es útil para configurar rápidamente un proyecto Node.js sin tener que proporcionar detalles personalizados en ese momento.

### install

El comando `npm install` (o `npm i`) se utiliza para instalar paquetes y dependencias en un proyecto Node.js.

- Permite agregar bibliotecas y módulos necesarios para el desarrollo de aplicaciones.

Uso:

- `npm install nombre-del-paquete` - Instala un paquete específico y lo agrega a las dependencias del proyecto.
