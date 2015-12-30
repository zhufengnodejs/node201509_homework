/**
 * Created by feifei on 2015/12/28.
 */
var http=require("http");
var url=require("url");
var fs=require("fs");
var mime=require("mime");
var base64=require("./changeToBase64")
var multer  = require('multer')
var querystring=require("querystring");
var multiparty = require('multiparty');
function serve(req,res){

    var urlObj = url.parse(req.url, true);
    var pathname=urlObj.pathname;
    if(pathname === "/"){
        var method=req.method;
        if(method == "GET"){
            fs.readFile("index.html","utf8",function(err,data){
                res.write(data);
                res.end();
            })
        }else if(method == "POST"){
            var form = new multiparty.Form();
            form.parse(req, function(err, fields, files) {
                var base64str=base64(fields.str[0]);
                res.write(base64str);
                res.end();

                /*Object.keys(files).forEach(function(name) {
                    console.log('got file named ' + name);
                });
*/
                /*console.log('Upload completed!');
                //res.setHeader('text/plain');
                res.end('Received ' + files.length + ' files');*/
            });
            /*var data="";
            req.on("data",function(chunk){
                data+=chunk;
            })
            req.on("end",function(){
                console.log(data)
                //res.write(base64(querystring.parse(data).str));
                res.end();
            })*/

        }

    }else if(pathname === "/favicon.ico"){
        res.writeHead(404);
    }
}

var server=http.createServer(serve);
server.listen("3000","localhost",function(){
    console.log("connection success")
})
