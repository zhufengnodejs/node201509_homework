var fs = require('fs');

fs.readFile('1.txt', {encoding: 'utf8'}, function(err, data){
   console.log(data);
});