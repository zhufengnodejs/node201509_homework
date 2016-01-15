var http = require('http'),
    fs = require('fs'),
    mime = require('mime');

http.createServer(function (req, res) {
    var content;
    if(req.url == '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf8');
        content = fs.readFileSync('./http.html', 'utf8');
        res.end(content);
    }else if(req.url = '/http.css') {
        res.setHeader('Content-Type', mime.lookup(req.url));
        content = fs.readFileSync('./http.css', 'utf8');
        res.end(content);
    }
}).listen(3000);
