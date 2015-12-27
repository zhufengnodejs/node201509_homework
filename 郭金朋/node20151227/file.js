var fs=require("fs");
//同步
var data=fs.readFileSync("index.html","utf-8");
console.log(data.toString())
//异步
fs.readFile("index.html",function(error,data){
    console.log(data.toString())
});

fs.writeFile("line.text","第一条信息",{flag:'w',encoding:"utf8"}, function (error,data) {
    if(!error)console.log(error)
});