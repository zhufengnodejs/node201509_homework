/**
 * Created by admin on 2015/12/26.
 */
var http=require('http');
var fs=require("fs");
var url=require("url");
var serv= function (request,response) {
   var urlObj=url.parse(request.url);
    console.log(urlObj);
   //设置响应的类型，编码为utf-8
   response.setHeader('Content-Type','text/html;charset=utf-8');
   response.setHeader('name','guojinpeng');//设置响应头
    response.write("这是我通过webstrom写的第一个文件");
    response.end();
}

var server=http.createServer(serv);
server.listen(8080,'localhost');
console.log("start 8080...")