/**
 * Created by Administrator on 2015/12/26.
 */
var http=require('http');
var port=8082;
var host='127.0.0.1';
function serve(req,res){
    var postData='';
    req.setEncoding('utf-8');
    req.on('data',function(chunk){
        postData+=chunk;
    });
    res.writeHead(200,{'Content-Type':'text/plain'});
    req.on('end',function(){
        res.end(postData+'hello Node.js');
    });
}

var server=http.createServer(serve);

server.listen(port,host);