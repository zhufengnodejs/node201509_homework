/**
 * node服务器
 */
 
var nodeServer = {
	/*入口*/
	init: function(){
		this.initModule();//加载模块
		this.initLogic();//执行逻辑
	},
	/*模块*/
	initModule: function(){
		this.http = require('http');//http对象
		this.fs = require('fs');//文件操作对象
		this.mime = require('mime');//文件类型判断对象
		this.url = require('url');//url操作对象
	},
	/*逻辑*/
	initLogic: function(){
		this.http.createServer(function(request, response){
			var urlObj = nodeServer.url.parse(request.url, true),//解析url为对象，参数true是将query也转换为对象。
				pathName = urlObj.pathname;//路径名
				
			//加载首页
			if(pathName == '/'){
				//设置响应的类型，编码为utf-8
				response.setHeader('Content-Type', 'text/html;charset=utf-8');
				//读取文件的内容并且将读到的内容写入到响应体
				nodeServer.fs.readFile('index.html', function(err, data){
					response.write(data);//写入响应体
					response.end();//结束
				});
			}else{
				//设置响应头，根据路径后缀名判断mime类型。
				response.setHeader('Content-Type', nodeServer.mime.lookup(pathName) + ';charset=utf-8');
				//读取指定文件
				nodeServer.fs.readFile(pathName.slice(1), function(err, data){
					response.write(data);
					response.end();
				});
			}
		}).listen(8080, 'localhost');
	}
}
/*执行*/
nodeServer.init();