var connect = require('connect');
var http    = require('http');

var server  = connect()
.use(connect.static(__dirname + '/public'));

http.createServer(server).listen(process.env.PORT || 3000);