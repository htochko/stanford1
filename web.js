var express = require('express');
var http    = require('http');
    fs      = require('fs');
var app = express.createServer(express.logger());
var content = fs.readFileSync('./index.html','utf-8');
var buf = new Buffer(content.length);
buf.write(content);
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
