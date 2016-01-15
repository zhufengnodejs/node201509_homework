/**
 * Created by hejinjun on 16/1/1.
 * 1. 如何在node中启用一个服务并监听8080端口 并向浏览器返回响应内容(内容包括简单的html+简单的css样式)
 */

var http = require('http');
var fs = require('fs');

function handler(request,response){
	if(request.url == '/'){ //
		response.setHeader('Content-type','text/html;charset=utf-8');
		fs.readFile('./index.html',function(err,data){
			response.write(data);
			response.end();
		})
	}else{
		fs.readFile(request.url.slice(1),function(err,data){
			response.setHeader('Content-type','text/css;charset=utf-8');
			if(data){
				response.write(data);
			}

			response.end();
		})
	}
}

var server = http.createServer(handler);

server.listen(8080,'localhost',function(){
	console.log('app run at 8080 port');
})