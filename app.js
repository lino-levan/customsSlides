var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client'));
var http = require('http').createServer(app);
var port = process.env.PORT || 4272;

http.listen(port, function(){
  console.log('listening on port' + port.toString());
});
