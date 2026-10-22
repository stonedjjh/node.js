# NVM y Gestion de Multiples Versiones de Node.js

## 1. ¿Que es un Gestor de Versiones de Node?

Un gestor de versiones permite instalar, aislar y alternar entre distintas versiones mayores de Node.js (ej. cambiar entre v18, v20 y v22) en una misma maquina de desarrollo sin requerir reinstalaciones manuales ni privilegios de administrador continuos.

Es indispensable en escenarios reales donde:
- Un proyecto legado depende de librerias nativas de C++ compiladas para Node 16 o 18.
- Un proyecto moderno requiere las ultimas caracteristicas de Node 22 (ej. soporte nativo de TypeScript o Web Crypto).

---

## 2. NVM para Windows (`nvm-windows`)

En entornos Windows, el proyecto oficial de NVM para Linux/macOS no funciona directamente con bash scripts. Se utiliza **`nvm-windows`**, una aplicacion en Go que gestiona los ejecutables mediante enlaces simbolicos en `%ProgramFiles%\nodejs`.

### Comandos Clave en PowerShell / CMD:
- Listar versiones de Node instaladas localmente:
  ```powershell
  nvm list
  ```
- Listar versiones disponibles para descarga en los servidores de Node:
  ```powershell
  nvm list available
  ```
- Instalar la version LTS recomendada o una version especifica:
  ```powershell
  nvm install lts
  nvm install 20.18.0
  ```
- Cambiar la version activa del sistema:
  ```powershell
  nvm use 20.18.0
  ```
- Desinstalar una version que ya no se utilice:
  ```powershell
  nvm uninstall 18.15.0
  ```

---

## 3. Comparativa: NVM vs `pnpm env` vs FNM

| Caracteristica | `nvm-windows` | `pnpm env` | `fnm` (Fast Node Manager) |
| :--- | :--- | :--- | :--- |
| **Lenguaje / Arquitectura** | Go (Enlaces simbolicos de sistema) | Integrado en PNPM (Node/JS) | Rust (Variables de entorno de shell) |
| **Velocidad de cambio** | Moderada (requiere permisos de symlink) | Rapida (global) | Ultra rapida (<10ms) |
| **Soporte `.nvmrc` / `.node-version`** | No automatico (manual o con scripts) | Soporta deteccion | Automatico al entrar al directorio |
| **Dependencia externa** | Requiere instalar instalador `.exe` | Requiere tener `pnpm` instalado | Binario standalone o Scoop/Winget |
| **Aislamiento de paquetes globales** | Cada version de Node tiene sus globales | Centralizado en store de pnpm | Cada version de Node tiene sus globales |

---

## 4. Criterio de Eleccion Tecnica

1. **Si todo tu flujo de trabajo gira en torno a PNPM:**
   `pnpm env` es la opcion mas limpia porque no requiere instalar herramientas adicionales fuera del ecosistema que ya utilizas.
2. **Si trabajas con equipos o repositorios diversos (unos usan npm, otros yarn, otros pnpm):**
   `nvm-windows` o `fnm` son opciones superiores porque operan a nivel del sistema operativo y no fuerzan a los demas desarrolladores a tener pnpm para compilar el proyecto.
3. **El estandar de facto en desarrollo local:**
   En repositorios empresariales es comun encontrar un archivo `.nvmrc` o `.node-version` en la raiz con el numero de version (ej. `20.12.0`). Gestores como `fnm` detectan este archivo y cambian de version automaticamente al hacer `cd` al proyecto.
