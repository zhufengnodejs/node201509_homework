/**
 * Created by Administrator on 2015/12/30.
 */
var p=require('./1.person.js');


var fs=require('fs');
var result=fs.readFileSync('json.json','utf-8');
var json=JSON.parse(result);

console.log(p);
console.log(json);


console.trace()

