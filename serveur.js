/**
 * Created by Administrateur on 14/12/2016.
 */
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html, charset=utf-8');
    res.write('<p><b>HELLO</b></p>');
    res.end('<p>Bye</p>');
})

server.listen(8080, () => {
    console.log("Le serveur écoute sur le port 8080");
});