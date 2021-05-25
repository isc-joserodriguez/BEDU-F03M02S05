const http = require('http');
const fs = require('fs');
const route = {
    '/': './index.html',
    '/index': './index.html',
    '/about': './about.html',
}

const app = http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        fs.readFile(route[req.url] || './404.html', 'utf-8', (err, html) => {
            if (err) {
                res.end('Hubo un error en la lectura del archivo');
            } else {
                res.end(html);
            }
        });
    }
});

app.listen(8080, () => {
    console.log('> Servidor escuchando el puerto 8080');
});