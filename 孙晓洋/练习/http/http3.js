var http=require('http');
var port=8083;
var host='127.0.0.1';
var fs=require('fs');
var mime=require('mime');

function  serve(req,res){
    var url=req.url;
    console.log(url);
    if(url=='/'){
        res.setHeader('Content-Type','text-html;charset=utf-8');
        fs.readFile('index.html',function(err,data){
            res.write(data);
            res.end();
        });
    }else{
        static(url,res);
    }
}


function static(url,res){
    res.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
    fs.readFile(url.slice(1),function(err,data){
        res.write(data);
        res.end();
    });
}

var server=http.createServer(serve);

server.listen(port,host);
