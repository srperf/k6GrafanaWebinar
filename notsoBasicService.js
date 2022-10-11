const http = require('http');

var timeDB = {
  host: 'localhost',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '8086',
  //This is what changes the request to a POST request
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);

//const hostname = '192.168.100.19';
const hostname = 'localhost';
let initTime = Date.now();
const port = 1236;
//await new Promise(resolve => setTimeout(resolve, 5000));
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hola\n' + initTime);
    setInterval(function() {
            res.end('\n Mitad\n');
        },between(5000,10000));
    //res.end('\n el World\n');
    req.write(Date.now()-initTime);
    req.end();
});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

server.listen(port, hostname, () => {    
  console.log(`Server running at http://${hostname}:${port}/`);
});
