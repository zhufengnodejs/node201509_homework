/**
 * Created by wzz on 2016/1/14.
 */
var net = require("net");
var util = require("util");
var os = require("os");

var group={};

/*
* 判断操作系统类型.是否是windows
*
* */
var startWith = function(str){
    var reg=new RegExp('^window','ig');
    return reg.test(str);
};

function broadcast(name, msg){
    for(var key in group){
        if(key != name)
            group[key].write(msg);
    }
};

var server = net.createServer({allowHalfOpen:true},function(socket){
    var name;


    var step = startWith(os.type()) ? "\r\n":"\n";
    var regExp = startWith(os.type()) ? /\r\n/ : /\n/;

    socket.setEncoding("utf8");
    console.log("client IP: ", util.inspect(socket.remoteAddress));
    server.getConnections(function(err,count){
        socket.write('欢迎光临，当前在线'+count+'人，请输入用户名'+step+'>');
    });


    socket.on("data", function(data){
        console.log(data);
        var info = data.replace(regExp, "");
        console.log("info :",info);
        if(info.length>1){
            if(name){
                broadcast(name, name+":"+info+step);
            }else{
                name = info;
                console.log("name :", name);
                group[name] = socket;
                broadcast(name, name+"加入了聊天室"+step);
            }
        }

    });
    socket.on("close", function(err){

    });
    socket.on("end", function(){
       console.log("end");
        broadcast(name, name+"离开了聊天室"+step);
        group[name].destroy();
        delete group[name];
    });
    socket.on("error", function(err){
        console.log(err);
    });
    socket.on("close", function(){
       console.log("socket close");
    });
});

server.on("error", function(err){
    console.log("server error", err);
});

server.on("close", function(err){
   console.log("服务器端正常关闭");
});

server.listen(8080, function(){
    console.log("服务器端监听8080 开始");
});
