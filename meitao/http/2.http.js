var http=require('http');
var fs=require('fs');
var mime = require('mime');
var url=require('url');

function serve(request,response){
   // console.log(request.method);
    console.log(request.url);
   // console.log(request.headers);
    var urlObj = url.parse(request.url,true);
    console.log(request.url,urlObj.query.name,urlObj.query.age);
    var pathname = urlObj.pathname;
    response.statusCode=200;
    if(pathname == '/'){
        static('/index.html',response);
    }
    else
    {
        console.log(pathname);
        static(pathname,response);
    }
}

function static(pathname,response){
    //设置响应的类型，编码为utf-8
    console.log(pathname.slice(1));

    console.log(mime.lookup(pathname));
    if(mime.lookup(pathname)=='text/css' || mime.lookup(pathname)=='text/html'){
    response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
    //读取文件的内容并且将读到的内容写入响应体
    fs.readFile(pathname.slice(1).toString(),function(err,data){
        response.write(data);//写响应体
        response.end();
    })
    }
}

///请求后自动进行响应
var server= http.createServer(serve);
server.listen(8081,'localhost');