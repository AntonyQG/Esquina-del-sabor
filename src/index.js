/*----- Aquí se ponen (usan) las dependencias y dependencias de desarrollo -----*/

const express = require('express');
const bootstrap = require('bootstrap');
const jquery = require('jquery');
// Este require sirve para tener la direccion en donde estamos y poder concatenar bien
const path = require('path');
// Aquí se requiere el archivo rutas para pasarselo a index.html
const { use } = require('/routes');
// Creación del servidor que es app
const app = express();



/*----- Configuraciones del servidor -----*/

// Se inicia definiendo el puerto
app.set('port', 3000);
// Configuración para la rederización de los archivos con ejs
app.set('view engine', 'ejs');
app.engine('views', require('ejs').renderFile);
// Configuración de la utilización de views
app.set('views', path.join(__dirname, 'views'));



/*----- middlewares (Lógica de de intercambio de información)
además de funciones que se ejecutan antes de que las rutas procesen algo -----*/



/*----- rutas (Aquí es donde mediante rutas se va a acceder a los diferentes archivos que se deconstruyeron y que accede el archivo index.html) -----*/

app.use(require('./routes/index'));



/*----- Static files -----*/ 

app.use(express.static(path.join(__dirname, 'public')));





/*----- Listenning the server (Aquí se configura el puerto en donde nuestra aplicación va  a estar trabajando) -----*/ 

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})