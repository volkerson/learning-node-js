// import file system core module
const fs = require("fs");

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if( url === '/') {
        res.write('<html>');
        res.write('<head><title>Node.js - Formular</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();        
    }
    
    if( url === '/message' && method === 'POST' ) {
    
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();   
            });            
        });
        
    
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node.js Response Page</title></head>');
    res.write('<body><h1>Hi from Node.js!</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = requestHandler;

