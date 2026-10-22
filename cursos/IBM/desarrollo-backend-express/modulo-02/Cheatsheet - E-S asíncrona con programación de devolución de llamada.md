# Cheatsheet - E/S asíncrona con programación de devolución de llamada

## Async-await
**Descripción:** Podemos esperar a que se cumplan las promesas siempre que se invoquen dentro de funciones asíncronas.

```javascript
const axios = require('axios').default;
let url = "some remote url"

async function asyncCall() {
 console.log('calling');
 const result = await axios.get(url);
 console.log(result.data);
}

asyncCall();
```

---

## Callback
**Descripción:** Las callbacks son métodos que se pasan como parámetros. Se invocan dentro del método al que se pasan como parámetro, de forma condicional o incondicional. Utilizamos callbacks con una promesa para procesar la respuesta o los errores.

```javascript
//function(res) and function(err) are the anonymous callback functions
axios.get(url).then(function(res) {
 console.log(res);
}).catch(function(err) {
 console.log(err)
})
```

---

## Promesa 

**Descripción:** Un objeto devuelto por algunos métodos, que representa la finalización o el fallo eventuales. El código continúa ejecutándose sin bloquearse hasta que se cumple la promesa o se lanza una excepción.

```javascript
axios.get(url).then(
//do something
).catch(
//do something
)
```

---

## Caso de uso de las promesas
**Descripción:** Las promesas se utilizan cuando el tiempo de procesamiento de la función que invocamos lleva tiempo, como el acceso a una URL remota, las operaciones de E/S o la lectura de archivos, etc.

```javascript
let prompt = require('prompt-sync')();
let fs = require('fs');

const methCall = new Promise((resolve,reject)=>{
 let filename = prompt('What is the name of the file ?');
 try {
  const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
  resolve(data);
 } catch(err) {
  reject(err)
 }
});

console.log(methCall);

methCall.then(
 (data) => console.log(data),
 (err) => console.log("Error reading file")
);
```

---

## object.on()

**Descripción:** Define un controlador de eventos que el marco de trabajo invoca cuando se produce un evento

```javascript
http.request( options, function(response) {
let buffer = '';
...
 response.on('data', function(chunk) {
 buffer += chunk;
});
 response.on('end', function() {
 console.log(buffer);
});
}).end();
```

---

## El infierno de las llamadas de retorno/La pirámide de la perdición
**Descripción:** Callbacks anidados apilados unos debajo de otros y a la espera del callback anterior. Esto crea una estructura piramidal que afecta a la legibilidad y al mantenimiento del código.

```javascript
const makeCake = nextStep => {
 buyIngredients(function(shoppingList) {
 combineIngredients(bowl, mixer, function(ingredients){
 bakeCake(oven, pan, function(batter) {
 decorate(icing, function(cake) {
 nextStep(cake);
 });
 });
 });
 });
};
```

---

## Solicitud Axios
**Descripción:** El paquete axios gestiona peticiones HTTP y devuelve un objeto «promise».

```javascript
const axios = require('axios').default;

const connectToURL=(url)=>{
 const req=axios.get(url);
 console.log(req);

 req.then(resp=>{
  console.log("Fulfilled");
  console.log(resp.data);
 })
 .catch(err=>{
  console.log("Rejected");
 });
}

connectToURL('valid-url')
connectToURL('invalid-url')
```
