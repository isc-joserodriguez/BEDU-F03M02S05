// 1. Importar Express
const express = require('express');

// 2. Crear una instancia de un servidor
const app = express();

// 3. ¿?

// 4. Definición de las 'rutas'
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', function (request, response) {
    response.sendFile(__dirname + '/about.html');
});

app.get('*', function (request, response) {
    response.sendFile(__dirname + '/404.html');
});

// 5. Escuchar un puerto
app.listen(8080, function () {
    console.log('> Servidor escuchando el puerto 8080');
});