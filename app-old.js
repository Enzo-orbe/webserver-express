const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'aplication/json' });

        let salida = {
            nombre: 'Enzo',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');