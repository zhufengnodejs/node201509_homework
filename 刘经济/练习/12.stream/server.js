/**
 * Created by Administrator on 2016/1/9.
 */
var http = require('http');
http.createServer(function(req, res) {
    console.log(req.headers)
    res.end('404')
    req.setEncoding('utf-8');
    req.on('data', function(data) {
        console.log(data)
    })
}).listen('8080', 'localhost')