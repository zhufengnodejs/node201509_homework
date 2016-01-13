var http=require("http");
var fs=require("fs");
var reader=fs.createReadStream("./header.txt");
var SimpleProtocol=require("./SimpleProtocol");
function serve(req,res){
    /*console.log(JSON.stringify(req.headers));
    buf=new Buffer(JSON.stringify(req.headers),"utf8");
    fs.write(writer,buf,0,buf.length)
    console.log(buf)*/


}
var server=http.createServer(serve);
function start(){
    server.listen(3000,"localhost",function(){
        console.log("listening");
    })
}
exports.start=start;