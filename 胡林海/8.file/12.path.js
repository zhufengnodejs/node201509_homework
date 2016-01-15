/**
 * Created by Administrator on 2015/12/31.
 */

var fs=require("fs");
var path=require("path");
/**
 * normalize 将非标准路径转成标准路径
 * 1. . ..
 * 2. 多个杠转成一个杠
 * 3. windows mac /
 * 4. 结尾的/也会保留
 **/
console.log(path.normalize(".//a////b//d//../c//d//..//"));



console.log(path.join(__dirname,'a','b','c'))

/**
 path.resolve 以应用程序为根起点，根据参数值得到绝对路径
 1. 以当前文件所在目录为为起点
 2. .. .
 3. 普通字符串表示下一级目录
 4./ 根目录
 5.如果没有下一级路径，返回当前路径
 **/

console.log(path.resolve());
console.log(path.resolve('/a','b'));
console.log(path.resolve('a','b'));
console.log(path.resolve('.','a','b','..','c'));

//参数路径的父目录
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));


console.log(path.basename('/a/d/cc/one.js','.js'));
console.log(path.extname('./xxx.txt'));

//操作系统文件的分隔符
console.log(path.sep);
console.log(path.delimiter);