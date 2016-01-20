var fs = require('fs');
var data = fs.readFileSync('1.txt', 'utf-8');
console.log(data);
var data = fs.readFile('1.txt', 'utf-8', function(err, data){
	console.log(1111, data);
})
