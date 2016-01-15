/**
 * 此次是将 test.txt file编码转换为 utf8
 * */

var fs = require('fs');
var content = fs.readFileSync('./test.txt', 'utf8');
console.log(content.toString());