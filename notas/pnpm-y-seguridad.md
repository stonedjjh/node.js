# PNPM: Seguridad, Rendimiento y Gestion de Entorno

## 1. Analisis Critico: ¿Es PNPM mas seguro que NPM?

Existe la percepcion extendida de que usar `pnpm` elimina las vulnerabilidades de `npm`. Esto es una verdad a medias que conviene desglosar con precision de ingenieria.

### Donde NO hay diferencia (Mismo Registro Central)
Tanto `npm`, `yarn` como `pnpm` consumen paquetes del mismo registro publico: `registry.npmjs.org`.
- Si un paquete publicado contiene malware (typosquatting, secuestro de cuentas de mantenedores, payloads en scripts de compilacion), `pnpm` descargara exactamente el mismo codigo infectado.
- La seguridad a nivel de codigo de terceros se mitiga mediante auditorias de dependencias (`pnpm audit`), fijado estricto de versiones en lockfiles y herramientas de analisis estatico (Snyk, Socket.dev, Dependabot).

### Donde SI gana PNPM (Seguridad Arquitectonica y Estructural)
1. **Mitigacion de Dependencias Fantasma (Phantom Dependencies):**
   - **Enfoque NPM / Yarn clasico:** Aplana el arbol en `node_modules` (`flat structure`). Si instalas `express`, y `express` depende internamente de `debug`, tu codigo puede ejecutar `const debug = require('debug')` sin haber declarado `debug` en tu `package.json`. Esto crea fragilidad critica y expone tu aplicacion a vectores de ataque no monitoreados.
   - **Enfoque PNPM:** Utiliza una estructura estricta basada en enlaces simbolicos (`symlinks`) apuntando a un almacen centralizado (`.pnpm/`). Tu aplicacion **unicamente tiene acceso a los paquetes declarados explicitamente en tu `package.json`**. Cualquier intento de requerir una subdependencia no declarada arrojara un error inmediato de modulo no encontrado.

2. **Aislamiento y Eficiencia en Disco (Content-Addressable Store):**
   - Los archivos de los paquetes se almacenan una unica vez en el disco global mediante enlaces duros (`hard links`). Diez proyectos usando la misma version de React consumen el espacio de uno solo.

3. **Restriccion de Scripts de Ciclo de Vida:**
   - `pnpm` ofrece un control mas transparente y restrictivo sobre la ejecucion automatica de scripts de instalacion (`preinstall`, `postinstall`), los cuales han sido la via primaria de inyeccion de exploits en el ecosistema JavaScript.

---

## 2. Comandos Esenciales de PNPM

| Accion | Comando NPM | Comando PNPM |
| :--- | :--- | :--- |
| Inicializar proyecto | `npm init -y` | `pnpm init` |
| Instalar dependencias del lockfile | `npm install` (o `npm ci`) | `pnpm install` |
| Agregar paquete de produccion | `npm i <paquete>` | `pnpm add <paquete>` |
| Agregar paquete de desarrollo | `npm i -D <paquete>` | `pnpm add -D <paquete>` |
| Agregar paquete global | `npm i -g <paquete>` | `pnpm add -g <paquete>` |
| Eliminar paquete | `npm uninstall <paquete>` | `pnpm remove <paquete>` |
| Ejecutar script de package.json | `npm run <script>` | `pnpm <script>` (omite el `run`) |
| Ejecutar binario local | `npx <binario>` | `pnpm exec <binario>` |
| Descargar y ejecutar herramienta puntual | `npx <paquete>` | `pnpm dlx <paquete>` |
| Auditar vulnerabilidades | `npm audit` | `pnpm audit` |

---

## 3. Gestion de Versiones de Node con `pnpm env`

PNPM incluye un gestor de versiones de Node.js nativo, lo que permite prescindir de NVM si se trabaja exclusivamente con PNPM.

### Comandos de `pnpm env`
- Instalar y activar la version LTS actual de Node:
  ```bash
  pnpm env use --global lts
  ```
- Instalar una version especifica (ej. Node 20):
  ```bash
  pnpm env use --global 20
  ```
- Listar versiones de Node instaladas localmente por pnpm:
  ```bash
  pnpm env list
  ```
- Listar versiones remotas disponibles para descarga:
  ```bash
  pnpm env list --remote
  ```
- Desinstalar una version concreta:
  ```bash
  pnpm env remove --global 18.16.0
  ```

---

## 4. Advertencias y Limitaciones Tecnicas de PNPM

1. **Problemas con paquetes legados (Dopplegangers / Hoisting):**
   Algunas librerias antiguas o herramientas de bundling con configuraciones rigidas asumen que `node_modules` es plano. Si un paquete falla por no encontrar dependencias anidadas, se puede configurar un archivo `.npmrc` en la raiz con:
   ```ini
   node-linker=hoisted
   ```
   *Nota: Usar esta bandera convierte a pnpm en un modelo plano similar a npm, perdiendo la ventaja contra dependencias fantasma.*

2. **Compatibilidad en equipos mixtos:**
   Si parte del equipo usa `npm` y commitea un `package-lock.json` junto con `pnpm-lock.yaml`, se generan discrepancias de dependencias resueltas. Debe estandarizarse el uso exclusivo de un unico gestor o forzarlo mediante el campo `packageManager` en `package.json`:
   ```json
   "packageManager": "pnpm@9.x.x"
   ```
