var http = require('http');

http.createServer(function(request, response){
	console.log(request.method);//请求的方法
	console.log(request.url);//请求里的url址
	console.log(request.headers);//获取请求头

	response.statusCode = 404;//设置状态码
	//设置响应的类型，编码为utf-8
	response.setHeader('Content-Type','text/html;charset=utf-8');
	response.setHeader('name','zfpx');//设置响应头
	response.write(new Date().toString());//写响应体
	response.end();
}).listen(8080, 'localhost');