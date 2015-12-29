/**
 * Created by fengjj on 2015/12/29.
 */
var http=require("http");
var fs=require("fs");
var url=require("url");
var mime=require("mime")

var urlObj={
    protocol:"http",
    slashes:true,
    host:"www.baidu.com:8000",
    pathname:"/abc",
    query:{
        name:"fjj"
    }
}

function serve(req,res){
    var pathname=url.parse(req.url,true).pathname;
    console.log(pathname)
    if(pathname === "/"){
        fs.readFile("index.html",function(err,data){
            if(err){
                console.log(err)
            }
            res.write(data);
            res.end()
        })
    }else if(pathname === "/favicon.ico"){
        res.writeHead(404)
    }else{
        staticSourse(pathname,res);
    }
}
function staticSourse(pathname,res){
    fs.readFile(pathname.slice(1),function(err,data){
        if(err){
            console.log(err);
            res.writeHead(404)
            res.end();
        }else{
            res.writeHead(200,{"Content-Type":mime.lookup(pathname)+";charset=utf8"})
            res.write(data);
            res.end();
        }

    })
}
var server=http.createServer(serve);
server.listen(6060,"localhost",function(err){
    console.log("connection success")
})
