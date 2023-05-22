// import  global http modul
const http = require("http");

// create server and an html response
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html><html>');
    res.write('<head><title>Node.js Response Page</title></head>');
    res.write('<body><h1>Hi from Node.js!</h1></body>');
    res.write('</html>');
    res.end();
});

// call the server
server.listen(3000);
