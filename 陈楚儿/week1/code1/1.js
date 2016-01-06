var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

function serve(request,response){
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;

    if(pathname == '/') {
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        fs.readFile('1.html', function (err, data) {
            response.write(data);
            response.end();
        })
    } else if(pathname == '/favicon.ico'){
        response.writeHead(404);
    } else {
        static(pathname,response)
    }

    function static(pathname,response){
        response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        fs.readFile(pathname.slice(1),function(err,data){
            if (!err){
                response.write(data);
                response.end();
            }
        })
    }
}
var server = http.createServer(serve);
server.listen(8080,'localhost');