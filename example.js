const http = require('http');
const PORT = 90;

http.createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World!\nThis site is created in Node.js.');
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);