var fs = require('fs');

function copy(src, target){
	
}

fs.writeFile('./text2.text', new Buffer('hello'), 0, 3, 0, function(){
	console.log('done');
});