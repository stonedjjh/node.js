# Librería: get-age

![Scope](https://img.shields.io/badge/Scope-dependencies-brightgreen?style=flat-square)
![Tipo](https://img.shields.io/badge/Tipo-Librer%C3%ADa%20de%20C%C3%B3digo-blue?style=flat-square)
![NPM](https://img.shields.io/badge/npm-get--age-cb3837?style=flat-square)
![Estado](https://img.shields.io/badge/Estado-Legado%20%2F%20Referencia-yellow?style=flat-square)

| Metadato | Detalle |
| :--- | :--- |
| **Nombre** | `get-age` |
| **Clasificación** | `dependencies` (Producción) |
| **Instalación habitual** | `pnpm add get-age` / `npm i get-age` |
| **Consumo en código** | `const getAge = require('get-age');` (CJS) |
| **Alternativa Nativa** | Cálculo directo con `new Date()` |

---

## ¿Qué es y para qué sirve?

**`get-age`** es un micro-paquete de utilidad que toma una fecha de nacimiento (como string en formato `YYYY-MM-DD` o año numérico) y retorna la edad en años cumplidos en base a la fecha actual del sistema.

---

## Uso básico en CommonJS

```javascript
const getAge = require('get-age');

const edad = getAge('1990-10-22');
console.log(edad); // Número entero con los años cumplidos
```

---

## Alternativa Nativa en JavaScript

El cálculo de edad no requiere paquetes externos. Puede resolverse limpiamente con la API estándar de fechas de JavaScript:

```javascript
const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const fecha = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }

  return edad;
};

console.log(calcularEdad('1990-10-22'));
```

> [!NOTE]
> **Estado en el ecosistema:**
> `get-age` es un paquete que no recibe actualizaciones desde hace muchos años. En entornos profesionales se desaconseja añadir dependencias externas para funciones de pocas líneas que el lenguaje nativo resuelve directamente.
