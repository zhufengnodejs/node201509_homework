var fs = require('fs');

function copy(src, target){
	fs.open(src, 'r', function(){
		var pos = 0;
		function read(){
			var buffer = new Buffer(3);
			fs.read(fd, buffer, 0, 3, pos, function(err, bytesRead){
				
			});
		}
	}
}

fs.writeFile('./text2.text', new Buffer('hello'), 0, 3, 0, function(){
	console.log('done');
});