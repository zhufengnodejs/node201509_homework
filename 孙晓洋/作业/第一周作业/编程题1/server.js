var http=require('http');
var fs=require('fs');
var mime=require('mime');
var port=8080;
var host='127.0.0.1';


function serve(req,res){
    var url=req.url;
    req.setEncoding('utf-8');
    if(url=='/'){
        res.setHeader('Content-type','text-html;charset=utf-8');
        fs.readFile('index.html',function(err,data){
            res.write(data);
            res.end();
        });
    }else{
        resource(url,res);
    }
}

function resource(url,res){
    res.setHeader('Content-type',mime.lookup(url)+';charset=utf-8');
    fs.readFile(url.slice(1),function(err,data){
        res.write(data);
        res.end();
    });
};

var server=http.createServer(serve);
server.listen(port,host);