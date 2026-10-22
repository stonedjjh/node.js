::page{title="Laboratorio práctico - Operaciones CRUD con Node.js"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/images/IDSN-logo.png" width="200" alt="logo de cognitiveclass.ai">

##

## Tiempo estimado necesario: 1 hora

En este laboratorio aprenderás a crear una **Lista de amigos** utilizando un servidor Express. Tu aplicación debe permitirte agregar un amigo con los siguientes detalles: `First name`, `Last name`, `Email` y `Date of birth`. También proporcionarás a la aplicación la capacidad de recuperar detalles, cambiar detalles y eliminar los detalles.

Estarás creando una aplicación con puntos finales de API para realizar operaciones de Crear, Recuperar, Actualizar y Eliminar sobre los datos mencionados utilizando un servidor Express.

También aprenderás a proporcionar acceso autenticado a los puntos finales. Utilizarás cURL y Postman para probar los puntos finales implementados.

## Objetivos:

* Crear puntos finales de API para realizar operaciones de Crear, Recuperar, Actualizar y Eliminar sobre datos transitorios con un servidor Express.
* Implementar autenticación a nivel de sesión utilizando JSON Web Tokens (JWT) para acceso autorizado.

::page{title="Configuración : Crear aplicación"}

1. Abre una ventana de terminal utilizando el menú en el editor: Terminal > Nueva Terminal.

![new-terminal](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/new-terminal.jpg)

2. Cambia a tu carpeta de proyecto, si aún no estás en la carpeta del proyecto.

```sh
cd /home/project
```


3. Ejecuta el siguiente comando para clonar el repositorio git que contiene el código inicial necesario para este laboratorio, si aún no existe.

```sh
[ ! -d 'mxpfu-nodejsLabs' ] && git clone https://github.com/ibm-developer-skills-network/mxpfu-nodejsLabs.git
```


![git-clone](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/git-clone.png)

5. Cambia al directorio **mxpfu-nodejsLabs** para comenzar a trabajar en el laboratorio.

```sh
cd mxpfu-nodejsLabs/
```


6.  Enumera el contenido de este directorio para ver los artefactos de este laboratorio.

```sh
ls
```


![listcontent](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/listcontent.png)

::page{title="Ejercicio 1: Entender la aplicación del servidor y ejecutar el servidor"}

1.  En el Explorador de Archivos, abre la carpeta **mxpfu-nodejsLabs** y visualiza **index.js**.

![ex1-indexjs-02.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/bhXv-VwecuAHz4RhpgMylQ/ex1-indexjs-02.png)

Tienes un servidor Express que ha sido configurado para ejecutarse en el puerto 5000. Cuando accedes al servidor con **/user**, puedes acceder a los endpoints definidos en **routes/users.js**.

Recuerda que GET, POST, PUT y DELETE son los métodos HTTP comúnmente utilizados para realizar operaciones CRUD. Estas operaciones recuperan y envían datos al servidor.

-  `GET` se utiliza para solicitar datos de un recurso específico.

- `POST` se utiliza para enviar datos a un servidor para crear un recurso.

- `PUT` se utiliza para enviar datos a un servidor para actualizar un recurso.

- `DELETE` se utiliza para eliminar un recurso específico.

> `POST` Y `PUT` a veces se utilizan de manera intercambiable.

2.  Este laboratorio requiere que se instalen algunos paquetes. El paquete **express** y **nodemon** para iniciar y ejecutar el servidor Express y **jsonwebtoken** y **express-session** para la autenticación basada en sesiones.

- **express** - Esto es para crear un servidor que sirva los endpoints de la API.
- **nodemon** - Esto ayudará a reiniciar el servidor cuando realices cambios en el código.
- **jsonwebtoken** - Este paquete ayuda a generar un token web JSON que utilizaremos para la autenticación. Un **token web JSON (JWT)** es un objeto JSON utilizado para comunicar información de manera segura a través de Internet (entre dos partes). Se puede utilizar para el intercambio de información y se usa típicamente en sistemas de autenticación.
- **express-session** - Este paquete nos ayudará a mantener la autenticación para la sesión.

Estos paquetes están definidos como **dependencias** en packages.json.

```json
  "dependencies": {
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.19"
}
```


3. Observe que la aplicación express utiliza el middleware **express.json()** para manejar la solicitud como un objeto json.

```
app.use(express.json());
```


4. Observe que la aplicación express utiliza rutas para manejar los endpoints que comienzan con **/user**. Esto significa que para todos los endpoints que comienzan con **/user**, el servidor irá a buscar un manejador de endpoints en **users.js**.

```
app.use("/user", routes);
```


5. Todos los endpoints tienen una implementación esquelética, pero funcional en **users.js**. Navega a users.js en el directorio routes y observa los endpoints definidos en él.

![userjs](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/userjs.png)

# Ejecutar el servidor

El código inicial proporcionado es un servidor en funcionamiento con valores de retorno de prueba. Antes de comenzar a implementar los endpoints reales, ejecuta el servidor.

1. En la terminal, imprime el directorio de trabajo para asegurarte de que estás en **/home/projects/mxpfu-nodejsLabs**.

```sh
pwd
```


2. Instala todos los paquetes necesarios para ejecutar el servidor. Copia, pega y ejecuta el siguiente comando.

```sh
npm install
```


>Esto instalará todos los paquetes requeridos según lo definido en packages.json.

3. Inicia el servidor express.

```sh
npm start
```


4. Abre un **Nuevo Terminal** desde el menú superior. Prueba un endpoint para recuperar estos usuarios. Esto aún no se ha implementado para devolver los usuarios.

```sh
curl localhost:5000/user
```


![curl_getusers_ytbi](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/curl_getusers_ytbi.png)

5. Si ves la salida como se muestra arriba, significa que el servidor está funcionando como se esperaba.

::page{title="Ejercicio 2: Implementa tus endpoints"}

1. Navega al archivo llamado **users.js** en la carpeta **routes**. Los endpoints han sido definidos y se ha dejado espacio para que implementes los endpoints.

![ex2-users-js.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/trVLW1SQ65CaqWa12cncXw/ex2-users-js.png)
<br>

2. **R** en CRUD significa recuperar. Primero agregarás un endpoint de API, utilizando el método **get** para obtener los detalles de todos los usuarios. Se han añadido algunos usuarios en el código inicial.

* Copia el código a continuación y pégalo en users.js dentro de las llaves { } en el método **router.get("/",(req,res)=>{}**.

```js
    res.send(users);
```


![Ex3-GET method.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/ml6mGfboCdqYyR8zvQ7PlQ/Ex3-GET%20method.png)

3. Asegúrate de que tu servidor esté en funcionamiento. A medida que realices cambios en el código, el servidor que iniciaste en la tarea anterior debe reiniciarse. Si el servidor no está en funcionamiento, inícialo nuevamente.

```sh
npm start
```


3. Haz clic en el botón **Skills Network** a la izquierda. Esto abrirá la "Caja de herramientas de Skills Network". Luego haz clic en `OTHER` y luego en `Launch Application`. Desde allí deberías poder ingresar el puerto como `5000` y lanzar el servidor de desarrollo.

![Launch_Application.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/Launch_Application.png)

4. Cuando se abra la página del navegador, añade **/user** al final de la URL en la barra de direcciones. Verás la página de abajo.

![ex2-GET-output.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/70NabjYX7I3uOLiIYsAkYw/ex2-GET-output.png)

5. Verifica la salida de la solicitud GET utilizando el comando curl de la misma manera que lo hiciste en el ejercicio anterior.

```sh
curl localhost:5000/user/
```


::page{title="Ejercicio 3: Creando un método GET por correo electrónico específico:"}

1. Implementa un método **get** para obtener los detalles de un usuario específico basado en su ID de correo electrónico utilizando el método `filter` en la colección de usuarios. Una vez que escribas el código y lo guardes, el servidor se reiniciará.

<details><summary>Haz clic aquí para ver el código</summary>

```js
router.get("/:email",(req,res)=>{
    // Extract the email parameter from the request URL
    const email = req.params.email;
    // Filter the users array to find users whose email matches the extracted email parameter
    let filtered_users = users.filter((user) => user.email === email);
    // Send the filtered_users array as the response to the client
    res.send(filtered_users);
});

```


![ex3-get-ByID-02.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/QtaLdsi_fdg4bozPzouLWA/ex3-get-ByID-02.png)

</details>

2. Haz clic en Terminal > Nuevo Terminal

![ex2-split terminal.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/5MXB49dIHgudOkW73wBvtA/ex2-split%20terminal.png)

3. En el nuevo terminal, utiliza el siguiente comando para ver la salida del usuario con el correo electrónico **johnsmith@gmail.com**

```sh
curl localhost:5000/user/johnsmith@gmail.com
```


![Ex3-GET por ID específico-CURL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Uyj6Xgg7oMI7QTy6PuiT8g/Ex3-GET%20by%20specific%20ID-CURL.png)

::page{title="Ejercicio 4: Creando el método POST:"}

1. La **C** en CRUD significa **Crear**. Implementa el endpoint **/user** con el método POST para crear un usuario y añadirlo a la lista. Puedes crear el objeto usuario como un diccionario. Puedes usar el objeto usuario de ejemplo que se muestra a continuación.

```js
{
    "firstName":"Jon",
    "lastName":"Lovato",
    "email":"jonlovato@theworld.com",
    "DOB":"10/10/1995"
}
```


Utiliza `push` para agregar el diccionario a la lista de usuarios. Los detalles del usuario se pueden pasar como parámetros de consulta llamados *firstName, lastName, DOB y email*.

>Consejo: El parámetro de consulta se puede recuperar del objeto de solicitud usando request.query.paramname

<details><summary>Haga clic aquí para ver el código</summary>

```js
router.post("/",(req,res)=>{
    // Push a new user object into the users array based on query parameters from the request
    users.push({
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "email": req.query.email,
        "DOB": req.query.DOB
    });
    // Send a success message as the response, indicating the user has been added
    res.send("The user " + req.query.firstName + " has been added!");
});

```


![ex4-post-02.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Te9wpAPL2ObLFhnqFQXm9w/ex4-post-02.png)

</details>

2. Utiliza el siguiente comando para publicar un nuevo usuario con el correo \'jonlovato@theworld.com\' en la nueva terminal:

```sh
curl --request POST 'localhost:5000/user?firstName=Jon&lastName=Lovato&email=jonlovato@theworld.com&DOB=10/10/1995'
```


3. La salida será como se muestra a continuación:

![Ex4-POST-CURL](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/Ex4-POST-CURL.png)

4. Para verificar si el usuario con el correo electrónico \'jonlovato@theworld.com\' ha sido agregado, puedes enviar una solicitud GET como se muestra a continuación:

```sh
curl localhost:5000/user/jonlovato@theworld.com
```


![Ex4-GET request-after-POST](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0220EN-SkillsNetwork/labs/Module3_ExpressJS/images/Ex4-GET%20request-after-POST.png)

::page{title="Ejercicio 5: Creando el método PUT:"}

1. La **U** en CRUD significa actualizar, lo cual se puede lograr utilizando el método PUT. Para realizar actualizaciones en los datos, utilizarás el método PUT. Primero debes buscar al usuario con el ID de correo electrónico especificado y luego modificarlo. El código a continuación muestra cómo se puede modificar la fecha de nacimiento (DOB) de un usuario. Realiza los cambios de código necesarios para permitir modificaciones en los otros atributos del usuario.

```js
router.put("/:email", (req, res) => {
    // Extract email parameter and find users with matching email
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    
    if (filtered_users.length > 0) {
        // Select the first matching user and update attributes if provided
        let filtered_user = filtered_users[0];
		
		 // Extract and update DOB if provided
		
        let DOB = req.query.DOB;    
        if (DOB) {
            filtered_user.DOB = DOB;
        }
		
        /*
        Include similar code here for updating other attributes as needed
        */
        
        // Replace old user entry with updated user
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        
        // Send success message indicating the user has been updated
        res.send(`User with the email ${email} updated.`);
    } else {
        // Send error message if no user found
        res.send("Unable to find user!");
    }
});

```


2. El código completado se verá así.

![Ex5-PUT-02.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/bTW7E52-H9FA5BhPGCdjfQ/Ex5-PUT-02.png)

3. Usa el siguiente comando para actualizar el `DOB` a `1/1/1971` para el usuario con el correo electrónico \'johnsmith@gmail.com\' en la terminal dividida:

```sh
curl --request PUT 'localhost:5000/user/johnsmith@gmail.com?DOB=1/1/1971'
```


4. La salida será la siguiente:

![ex5-PUT-CURL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/uR104mGi6h4PDfCVfSX01w/ex5-PUT-CURL.png)

5. Para verificar si la `DOB` del usuario con el correo electrónico \'johnsmith@gmail.com\' ha sido actualizada, puedes enviar una solicitud GET como se muestra a continuación:

```sh
curl localhost:5000/user/johnsmith@gmail.com
```


![ex5-GET request-after-PUT.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/0sV-LMdXBThWTNQ7vydErg/ex5-GET%20request-after-PUT.png)

::page{title="Ejercicio 6: Creando el método DELETE:"}

1. La \"D\" en CRUD significa **Eliminar**. Implementa el método DELETE para eliminar el correo electrónico de un usuario específico utilizando el siguiente código:

```js
router.delete("/:email", (req, res) => {
    // Extract the email parameter from the request URL
    const email = req.params.email;
    // Filter the users array to exclude the user with the specified email
    users = users.filter((user) => user.email != email);
    // Send a success message as the response, indicating the user has been deleted
    res.send(`User with the email ${email} deleted.`);
});

```


2. El código completado se verá así.

![Ex6-DELETE-02.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/sI67Wiabyp5REn0Q15OvVw/Ex6-DELETE-02.png)

3. Usa el siguiente comando para eliminar al usuario con el correo \'johnsmith@gmail.com\' en la terminal dividida:

```sh
curl --request DELETE 'localhost:5000/user/johnsmith@gmail.com'
```


4. La salida será la siguiente:

![ex6-DELETE-CURL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/WrmQucHX3s3aJuLXPz4DPw/ex6-DELETE-CURL.png)

5. Envía una solicitud GET para el usuario con el correo electrónico 'johnsmith@gmail.com' y asegúrate de que se devuelva un objeto nulo:

![ex6-_GET_request_after_DELETE.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/rryhR4Ohr_iCHJDaHztgUg/ex6--GET-request-after-DELETE.png)

<br>

::page{title="Ejercicio Opcional: Formatear la salida"}

1. Para hacer la salida más legible, puedes usar el método JSON stringify como se indica a continuación. Por favor, actualiza el código para el método GET a:

```js
// Define a route handler for GET requests to the root path "/"
router.get("/",(req,res)=>{
    // Send a JSON response containing the users array, formatted with an indentation of 4 spaces for readability
    res.send(JSON.stringify({users}, null, 4));
});
```


2. Inicie la aplicación en el puerto 5000 y agregue \'user\' al final de la URL.

3. Esto mostrará la salida del método GET como una cadena JSON según el método GET actualizado que se muestra a continuación:

![ex7-GET-JSON-output.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/ZekSiKCypqVIeQq_4zlRrg/ex7-GET-JSON-output.png)

::page{title="Ejercicio 7: Implementación de Autenticación"}

Todos estos puntos finales son accesibles por cualquier persona. Ahora verás cómo agregar autenticación a las operaciones CRUD. Este código ha sido implementado en **index_withauth.js**.

1. Observa el siguiente bloque de código en **index_withauth.js**.

```
app.use(session({secret:"fingerprint",resave: true, saveUninitialized: true}))
```


Esto le indica a su aplicación express que use el middleware de sesión.

- **secret** - una clave única aleatoria utilizada para autenticar una sesión.
- **resave** - toma un valor booleano. Permite que la sesión se almacene de nuevo en el almacén de sesiones, incluso si la sesión nunca fue modificada durante la solicitud.
- **saveUninitialized** - esto permite que cualquier sesión no inicializada se envíe al almacén. Cuando se crea una sesión pero no se modifica, se denomina **no inicializada**.

El valor predeterminado tanto de **resave** como de **saveUninitialized** es verdadero, pero el predeterminado está en desuso. Por lo tanto, establezca el valor apropiado según el caso de uso.

2. Observe la implementación del endpoint **login**. Un usuario inicia sesión en el sistema proporcionando un nombre de usuario. Se genera un token de acceso que es válido por una hora. Puede observar esta longitud de validez especificada por **60 \* 60**, que significa el tiempo en segundos. Este token de acceso se establece en el objeto de sesión para garantizar que solo los usuarios autenticados puedan acceder a los endpoints durante ese tiempo.

```js
// Login endpoint
app.post("/login", (req, res) => {
    const user = req.body.user;
    if (!user) {
        return res.status(404).json({ message: "Body Empty" });
    }
    // Generate JWT access token
    let accessToken = jwt.sign({
        data: user
    }, 'access', { expiresIn: 60 * 60 });

    // Store access token in session
    req.session.authorization = {
        accessToken
    }
    return res.status(200).send("User successfully logged in");
});
```


3. Observe la implementación del middleware de autenticación. Todos los puntos finales que comienzan con **/user** pasarán por este middleware. Recuperará los detalles de autorización de la sesión y los verificará. Si el token es validado, el usuario está autenticado y el control se pasa al siguiente manejador de punto final. Si el token es inválido, el usuario no está autenticado y se devuelve un mensaje de error.

```js
// Middleware for user authentication
app.use("/user", (req, res, next) => {
    // Check if user is authenticated
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken']; // Access Token
        
        // Verify JWT token for user authentication
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user; // Set authenticated user data on the request object
                next(); // Proceed to the next middleware
            } else {
                return res.status(403).json({ message: "User not authenticated" }); // Return error if token verification fails
            }
        });
        
        // Return error if no access token is found in the session
    } else {
        return res.status(403).json({ message: "User not logged in" });
    }
});
```


::page{title="Ejercicio 8: Probando endpoints con POSTMAN"}

Has probado los endpoints de la API con cURL. Una forma más fácil y amigable de probar estos endpoints es con la herramienta de interfaz gráfica (GUI), Postman.

1. Abre Postman visitando:
   https://web.postman.co  
   Si no tienes una cuenta, regístrate para obtener una nueva cuenta de Postman. De lo contrario, inicia sesión en tu cuenta existente.

![Postman_login.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/dNVuciyOIZYLjfak6f9elw/Postman-login.png)

2. Después de iniciar sesión, navega a tu espacio de trabajo:
   - Haz clic en **Workspaces**
   - Selecciona **My Workspace**

![Postman_afterlogin.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/VeNWc9E9RlIckqbTEWDFEg/Postman-afterlogin.png)

3. Crea una nueva solicitud:
   - Haz clic en el **"+" (icono de más)** para abrir una nueva pestaña de solicitud

![Postman_createrequest.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/p-gvV2kclueSAYGzYoE0FA/Postman-createrequest.png)

> **Nota**: Si el servidor está corriendo en el laboratorio theia, por favor detén el servidor presionando **CTRL + C**. Ahora inicia el servidor ejecutando el siguiente comando que escuchará en el puerto 5000.

```sh
npm run start_auth
```


>Hasta ahora estábamos accediendo a todos los puntos finales sin autenticación, pero ahora usaremos autenticación para acceder a los puntos finales.

4. Copia la URL de la aplicación de lanzamiento y añade el inicio de sesión como un punto final para agregar los detalles del usuario en la **SOLICITUD POST** que se verá como a continuación:

 ```
 https://<sn-lab-username>-5000.theiadocker-2-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/login
 ```

5. Los detalles del usuario deben estar en el siguiente formato:

```
{
    "user":{
        "name":"abc",
        "id":1
    }
} 
```


![Postman_loginrequest.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/28DTMGpzjXAQhsUTreTXWA/Postman-loginrequest.png)

Ahora comencemos la prueba enviando una solicitud HTTP GET.

::page{title="8.1 Solicitud GET"}

a. Introduzca la URL de la solicitud GET: ```https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user``` en su cuadro de entrada de Postman donde dice \"Introducir URL de solicitud\".

![ex7-GET request-URL entry.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/EeFGyQGEzdvbvLjfZDV1bQ/ex7-GET%20request-URL%20entry.png)

b. Haga clic en el botón `Enviar` después de ingresar la URL.

![ex7-GET request-send.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/dNq8Q4dxtb3M4hsNg2H_fQ/ex7-GET%20request-send.png)

c. La salida será como se muestra a continuación:

![ex7-GET request-output.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/CiOkpRKhLIjyXZowX0IJpA/ex7-GET%20request-output.png)

<br><br>

::page{title="8.2 Solicitud GET por ID específico"}

a. Ingresa la URL de la solicitud añadiendo la dirección de correo electrónico específica a la URL de la solicitud GET anterior. Si la dirección de correo electrónico es johnsmith&#064;gmail.com, entonces ingresa la siguiente URL en el cuadro de entrada de Postman:
```https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/johnsmith@gmail.com ```

![ex7-GET-byID-URL entry.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/7HcdFlhuynzIxvjV3zORBQ/ex7-GET-byID-URL%20entry.png)

b. Haz clic en el botón **Enviar** después de ingresar la URL para ver la salida. 

![ex7-GET-byID-send.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/5s2Q_0W5xgzkvYEpoE-L-g/ex7-GET-byID-send.png)

c. La salida será como se muestra a continuación:

![ex7-GET-byID-request-output.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Tm_tlKA76KmXkVC4ccGrkQ/ex7-GET-byID-request-output.png)

::page{title="8.3 Solicitud POST :"}

a. Ingresa la URL básica de la solicitud POST:

```
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/
``` 


Asegúrate de seleccionar el método POST y seleccionar los \"Params\".

![ex7-POST-base-URL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/O18BRvD08zHBfan_AF17rw/ex7-POST-base-URL.png)

b. Ingresa el firstName como \'Bob\', lastName como \'Smith\', email como \'bobsmith@gmail.com\' y DOB como \'1/1/1978\' para un nuevo usuario:

![ex7-POST-key-value.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/TCVP6JvReRxaCrz_A2gaZg/ex7-POST-key-value.png)

c. Haz clic en el botón **Send** después de ingresar la URL para ver la salida.

![ex7-POST_send.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Y1EbeBML_AQSkT62znn1Bg/ex7-POST-send.png)

Verifica que los nuevos valores añadidos se hayan actualizado realizando la solicitud GET.

> Nota: Asegúrate de eliminar cualquier parámetro que hayas agregado para la solicitud POST antes de enviar la solicitud GET.

![ex7-GET_after-POST.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/2As3XyFetAg2uakoSolc0g/ex7-GET-after-POST.png)

<br><br>

::page{title="8.4 Solicitud PUT"}

a. Ingresa la URL añadiendo la dirección de correo electrónico específica. Si la dirección de correo es bobsmith&#064;gmail.com, entonces ingresa esta URL en el cuadro de entrada de Postman:

```
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gmail.com
```  


Asegúrate de seleccionar el método PUT y seleccionar los \"Params\".

![ex7-PUT-base-URL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/y6WufQXzBTM87Aa-OW3-xA/ex7-PUT-base-URL.png)

b. Ingresa la clave y los valores que se van a cambiar. Por ejemplo, si deseas cambiar la clave \"DOB\" y reemplazarla con el nuevo valor 1/1/1981, será como a continuación.

![ex7-PUT-key-value.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/4zqquERPvM2J-3wKrvPm5A/ex7-PUT-key-value.png)

c. Haz clic en el botón **Send** después de ingresar la URL para ver la salida.

![ex7-PUT-send.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/TvFBJvmAArSmq7jdzKT3Qw/ex7-PUT-send.png)

Verifica que los nuevos valores añadidos se hayan actualizado realizando una solicitud GET.

> Nota: Asegúrate de eliminar cualquier parámetro que hayas añadido para la solicitud PUT antes de enviar la solicitud GET.

![ex7-GET_after-PUT.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/XN0Ao2Mfkd9BUXeGvR3MZw/ex7-GET-after-PUT.png)

<br><br>

::page{title="8.5 Solicitud DELETE:"}

 a. Ingresa la URL añadiendo la dirección de correo electrónico específica. Si la dirección de correo electrónico es bobsmith&#064;gmail.com, entonces ingresa esta URL en el cuadro de entrada de Postman: 

```
https://XXXXXXXXXX-5000.theiadocker-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/user/bobsmith@gmail.com
```


Asegúrate de seleccionar el método DELETE.

![ex7-DELETE-base-URL.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/-f61mvyvpaw99wE98ecIiA/ex7-DELETE-base-URL.png)

b. Haz clic en el botón "Enviar" después de ingresar la URL para ver la salida.

![ex7-DELETE-send.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/H1rkGwJhSGKYBGr9mjMv1A/ex7-DELETE-send.png)

c. Verifica que el GET del usuario por ID bobsmith&#064;gmail.com devuelve un objeto nulo enviando una solicitud GET.

> Nota: Asegúrate de eliminar cualquier parámetro (si es que hay alguno) antes de enviar la solicitud GET.

![ex7-GET-after-DELETE.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/_199nYA1PzNYHCZ_fasoOQ/ex7-GET-after-DELETE.png)

::page{title="Laboratorios de práctica"}

1. Crea un endpoint en el mismo código para obtener todos los usuarios con un apellido particular.

<details>
<summary> ¡Haz clic aquí para una pista!</summary>
Pista: Filtra `lastName` del array `users`.
</details>

<details>
<summary> ¡Haz clic aquí para la solución!</summary>

Solución:

```js
router.get("/lastName/:lastName", (req, res) => {
    // Extract the lastName parameter from the request URL
    const lastName = req.params.lastName;
    // Filter the users array to find users whose lastName matches the extracted lastName parameter
    let filtered_lastname = users.filter((user) => user.lastName === lastName);
    // Send the filtered_lastname array as the response to the client
    res.send(filtered_lastname);
});

```


</details>

2. Crea un endpoint en el mismo código para ordenar usuarios por fecha de nacimiento.

<details>
<summary> Haz clic aquí para una pista!</summary>
Pista: Separa la fecha de nacimiento y conviértela al formato aaaa/mm/dd y luego ordénala.
</details>

<details>
<summary> Haz clic aquí para la Solución!</summary>
Solución:

```js
// Function to convert a date string in the format "dd-mm-yyyy" to a Date object
function getDateFromString(strDate) {
    let [dd, mm, yyyy] = strDate.split('-');
    return new Date(yyyy + "/" + mm + "/" + dd);
}

// Define a route handler for GET requests to the "/sort" endpoint
router.get("/sort", (req, res) => {
    // Sort the users array by DOB in ascending order
    let sorted_users = users.sort(function(a, b) {
        let d1 = getDateFromString(a.DOB);
        let d2 = getDateFromString(b.DOB);
        return d1 - d2;
    });
    // Send the sorted_users array as the response to the client
    res.send(sorted_users);
});

```


</details>

### ¡Felicidades! Has completado el laboratorio de operaciones CRUD con Node.js y Express.js utilizando Postman.

## Resumen:

En este laboratorio, hemos realizado operaciones CRUD como GET, POST, PUT y DELETE en una aplicación Express y hemos probado los métodos anteriores utilizando Postman.

## Author(s)

<h4> Sapthashree K S <h4/>
<h4> K Sundararajan <h4/>

<h3 align="center"> &#169; IBM Corporation. Todos los derechos reservados. <h3/>