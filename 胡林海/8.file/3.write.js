/**
 * Created by Administrator on 2015/12/30.
 */
var fs=require('fs');

fs.writeFile('line.txt','第一行',{encoding:'utf-8',flag:'w'},function(err,data){
    console.log(err);
});

//fs.writeFile('line.txt','第二行',{encoding:'utf-8',flag:'a'},function(err,data){
//    console.log(err);
//})

fs.appendFile('line.txt',new Buffer('第二行'));


var buf = new Buffer('珠');

console.log(buf);
//e7 8f a0

console.log(parseInt("e7",16)); //231
console.log(parseInt("8f",16)); //143
console.log(parseInt("a0",16)); //160
console.log((231).toString(2)); //11100111
console.log((143).toString(2)); //10001111
console.log((160).toString(2)); //10100000
// 00111001 00111000 00111110 00100000
console.log(parseInt("00111001",2));//57
console.log(parseInt("00111000",2));//56
console.log(parseInt("00111110",2));//62
console.log(parseInt("00100000",2));//32

var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str=str.toLowerCase();
str+="0123456789";
str+='+/';
console.log(str[35]);