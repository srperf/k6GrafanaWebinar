const http = require('http');

//const hostname = '192.168.100.19';
const hostname = 'localhost';
let initTime = Date.now();
const port = 1235;
//await new Promise(resolve => setTimeout(resolve, 5000));
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hola\n' + initTime);
    setInterval(function() {
            res.end('\n el World\n');
        },between(5000,10000));
});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

server.listen(port, hostname, () => {    
  console.log(`Server running at http://${hostname}:${port}/`);
});
