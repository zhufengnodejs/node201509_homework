1. 200HTTP响应是什么意思   答：成功
2. Connection:Keep-Alive头为什么很重要
	没有无法保持长连接
3. 如何导入一个模块
	var person = require('./person');
4. 如何安装一个模块
	npm install 模块名
5. 写出 url http fs mime 模块中的几个常用方法，并注明其作用
	http.createServer(cb)  创建服务器对象   fs.readFile('文件名',cb) 读文件   url.parse(url) 把url转换成对象  
6. 写出几个global下的全局变量并注明其作用
	setTimeout setInterval setImmediate cosole.log 
7. 写出几个process 下的几个属性或方法并注明其作用
	process.kill(1860) 关闭进程 process.pid当前进程id  process.cwd() 当前目录 process.chdir('..');改变目录