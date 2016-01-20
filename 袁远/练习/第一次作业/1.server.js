var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
function server (request, response){
	var urlObj = url.parse(request.url, true);
	// console.log(req.url, urlObj.query.name, urlObj.query.age);
	var pathname = urlObj.pathname;

	if(pathname == path.sep){
		response.setHeader('Content-Type','text/html;charset=utf-8');
	    //读取文件的内容并且将读到的内容写入响应体
	    fs.readFile('index.html',function(err,data){

	      response.write(data);//写响应体
	      response.end();
	    })
	}
	// else if(pathname ==path.sep+'favicon.ico'){
	// 	response.setHeader('Content-Type','text/html;charset=utf-8');
	// 	response.statusCode = 404;
	// 	response.end();
	// 	console.log(111111);
	// }
	else{
		static(pathname, response);
	}
	function static(pathname, response){
		response.setHeader('Content-Type', mime.lookup(pathname)+';charset=utf-8');
		console.log(pathname.slice(1));
		fs.readFile(pathname.slice(1),function(err,data){
			if(err){
				if(err.errno == -2){

					console.log(err);
					response.setHeader('Content-Type','text/html;charset=utf-8');
					response.statusCode = 404;
					response.end();
				}
							
			}
			else{
				response.write(data);
				response.end();
			}
			
		})
	}
}	



var server = http.createServer(server);

server.listen (8080, 'localhost');