const http = require('http');

const hostname = '192.168.100.10';
const port = 1234;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
},Math.floor(Math.random() * 10000) + 1);

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
