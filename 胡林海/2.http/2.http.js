/**
 * Created by Administrator on 2015/12/29.
 */
var http=require('http');
var fs=require("fs");
var mime=require("mime");

function serve(request,response){
    var url=request.url;
    console.log(url);
    if(url=="/"){
        response.setHeader('Content-type','text/html;charset=uft-8');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        })
    }else{
        static(url,response);
    }

    function static(url,res){
        res.setHeader('Content-type',mime.lookup(url)+';charset=uft-8');
        fs.readFile(url.slice(1),function(err,data){
            res.write(data);
            res.end();
        })
    }
}

var server=http.createServer(serve);
server.listen(8081,'localhost');