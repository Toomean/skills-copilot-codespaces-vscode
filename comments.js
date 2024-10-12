// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.join(__dirname, 'comments.html'), function(err, data) {
        if (err) {
            throw err;
        }
        response.end(data);
    });
}).listen(3000);