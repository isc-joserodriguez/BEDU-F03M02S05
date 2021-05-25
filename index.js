/*
Crear API (express)
llamada /primos que regrese el listado de los primeros N primos
*/
const express = require('express');
const pr = require('prime-functions')

const app = express();
app.get('/', function (request, response) {
    response.end('Hello BEDU');
});

app.get('/primos/:num', function (request, response) {
    const { num = 1 } = request.params;
    response.end(`Los primeros ${num} primos son:\n [${pr.firstNPrimes(num).join(' , ')}]`)
})

app.listen(8080, function () {
    console.log('> Servidor escuchando el puerto 8080');
});