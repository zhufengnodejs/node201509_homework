var http=require('http');
var fs=require('fs');

function serve(request,response){
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);
    response.statusCode=200;
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','zfpx');
    //读取文件内容，并显示
    fs.readFile('index.html',function(err,data){
        response.write(data);
        response.end();
    });




}


///请求后自动进行响应
var server= http.createServer(serve);
server.listen(8081,'localhost');