// Including the HTTP & file system module
// Hostname is the local IP which is including a port

const http = require('http');
const fs = require('graceful-fs');
const hostname = '127.0.0.1';
const port = 3000;
var message;

// Program read files every 10 secs, because the txt file is getting lively updated
setInterval(function() {readFile()}, 10000);

// Here we are listening for an upgrade 3event and creating a HTTP-pathway
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function readFile() {
  fs.readFile('C:/Users/kusha/PycharmProjects/pythonProject1/device_count.txt', 'utf8',(err, data) => {
    if (err){
      console.error(err);
      return;
    }
    message = data;

  })
}
