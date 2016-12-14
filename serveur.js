"use strict"
const http = require('http');
const MyRouteur = require('./MyRouteur.js');
const MyContact = require('./MyContact.js');

let routes = [
    new MyRouteur("Contact","GET",""),
    new MyRouteur("Contact","PUT","")
];

let contactList = [
    new MyContact("Aaaaaa", "AAAAAAA"),
    new MyContact("Bbbbbb", "BBBBBBB"),
    new MyContact("Cccccc", "CCCCCCC"),
    new MyContact("Dddddd", "DDDDDDD"),
    new MyContact("Eeeeee", "EEEEEEE")
];


const server = http.createServer((req, res) => {

    switch(req.url){
        case "/Contact":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html, charset=utf-8');
            //res.write('<p><b>HELLO</b></p>');
            res.end('/Contact');
            break;
        case "/Contact/":

            break;
        default:
            console.log("No routes defined");
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html, charset=utf-8');
            //res.write('<p><b>HELLO</b></p>');
            res.end('No routes defined');
            break;
    };


})

server.listen(8080, () => {
    console.log("Le serveur écoute sur le port 8080");
});