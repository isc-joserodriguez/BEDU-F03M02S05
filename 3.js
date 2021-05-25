const express = require('express');

const app = express();
app.get('/', function (request, response) {
    response.end('Hello BEDU');
});

app.get('/suma', function (request, response) {
    const { a = 0, b = 0 } = request.query
    response.end(`La suma de ${a} + ${b} = ${(+a) + (+b)}`)
});

app.get('/factorial/:num', function (request, response) {
    const { num = 0 } = request.params;
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    response.end(`!${num} = ${res}`)
})

app.listen(8080, function () {
    console.log('> Servidor escuchando el puerto 8080');
});