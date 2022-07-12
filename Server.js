const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/mydb');
  
  var db = mongoose.connection;
   
  db.on('error', console.error.bind(console, 'connection error:'));
   
  db.once('open', function() {
    console.log("Connection Successful!");
  });
}

const server = http.createServer(requestListener);
server.listen(8080);