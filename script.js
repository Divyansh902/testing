const http = require('http');

// response => data send by server
// request => data send by the browser
const server = http.createServer((request, response) => {
    // console.log('request received');
    // response.write('hello world');
    // response.end();

    if (request.url === '/') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end('this is home page');
    } 
    else if (request.url === '/about') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end('this is about page');
    } 
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end('404 page not found');
    }
});

server.listen(3003, () => {
    console.log('server is running on port 3000');
});