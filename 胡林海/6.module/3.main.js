/**
 * Created by Administrator on 2015/12/30.
 */
var a=require("./a.js");
var b=require('./b.js');

a.loaded();
b.loaded();

console.log("module.children",module.children)