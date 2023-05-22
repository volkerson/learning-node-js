// import  global http module
const http = require("http");

// import local module routes
const routes = require("./routes");

// create server and add functionality as callback 
const server = http.createServer(routes);

// call the server
server.listen(3000);
