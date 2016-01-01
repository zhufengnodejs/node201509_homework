var fs = require('fs');

var data = fs.readFile('test.txt', {encoding: 'utf8'}, function(err, data) {
    console.log(data);
});