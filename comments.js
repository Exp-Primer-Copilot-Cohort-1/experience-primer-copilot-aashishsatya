// Create a web server

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

http.createServer(function (req, res) {
    var parseUrl = url.parse(req.url, true);
    var pathname = parseUrl.pathname;
    if (pathname === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    } else if (pathname === '/comment') {
        var query = parseUrl.query;
        comments.push(query);
        res.end(JSON.stringify(comments));
    } else {
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                console.log(err);
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    }
}).listen(3000, function () {
    console.log('Server is running...');
});