/**
 * Created by Administrator on 2015/12/29.
 */
var http=require('http');
var fs=require('fs');
var mime=require('mime');
var url=require('url');

function serve(request,response){
    var urlObj=url.parse(request.url,true);
    console.log(urlObj)
    console.log(request.url,urlObj.query.name,urlObj.query.age);
    var pathname=urlObj.pathname;

    if(pathname=="/"){
        response.setHeader('Content-type','text/html;charset=uft-8');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        })
    }else if(pathname=='/clock'){
        var counter=0;
        var int=setInterval(function(){
            response.write(new Date().toString());
            counter++;
            if(counter==5){
                clearInterval(int);
                response.end();
            }
        },1000)
    }else{
        static(pathname,response);
    }

    function static(url,response){
        response.setHeader('Content-type',mime.lookup(pathname)+';charset=uft-8');
        fs.readFile(url.slice(1),function(err,data){
            response.write(data);
            response.end();
        })
    }
}

var server=http.createServer(serve);
server.listen(8081,'localhost');