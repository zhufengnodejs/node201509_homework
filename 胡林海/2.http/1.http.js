/**
 * Created by Administrator on 2015/12/28.
 */
var http=require('http');
var fs=require("fs");
/*
*
* @param request  请求
* @param response 响应
* */

function serve(request,response){
    console.log(request.headers) //获取请求头

    response.statusCode=200; //设置请求头

    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','zfpx');

    fs.readFile('index.html',function(err,data){
        response.write(data);
        response.end();
    })
}

var server=http.createServer(serve);

server.listen(8081,'localhost');