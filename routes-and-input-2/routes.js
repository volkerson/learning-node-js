// import file system core module
const fs = require("fs");

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if( url === '/') {
        res.write('<html>');
        res.write('<head><title>Start the challenge!</title></head>');
        res.write('<body>');
        res.write('<p>Hi, enter a username!</p>');
        res.write('<form action="/create-user" method="POST"><input name="username" type="text"><button type="submit">Submit User</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();        
    }
    if( url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>Admin</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();        
    }    
    
    if( url === '/create-user' && method === 'POST' ) {
    
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            console.log(username);
                                     
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end(); 
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node.js Response Page</title></head>');
    res.write('<body><h1>Hi from Node.js!</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = requestHandler;

