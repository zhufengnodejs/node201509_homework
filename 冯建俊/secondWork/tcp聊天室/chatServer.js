/*
 1.创建TCP服务器
 2.客户端可以连接进来
 3.客户进来之后先设置呢称
 4.呢称不能重复
 5.接收用户的聊天信息，广播给所有人
 6.当用户进入或退出时通知大家
 7. 每当用户进入的时候显示当前的在线人数
* */

/* 客服端  回车时为发送消息*/

var net=require("net");
var client={};
var count=0;
var server=net.createServer(function(socket){
    var nickname;
    var dataArr=[];
    //client.push(socket);
    socket.setEncoding("utf8")
    server.getConnections(function(err,count){
        count=count;
    })
    socket.write("欢迎加入聊天室 \r\n")
    socket.on("data",function(data){
        console.log(data)
        if(data==="\r\n" && data.length>0){
            //console.log(data)
            socket.pause();
            if(nickname){
                var conData=dataArr.join("");
                dataArr=[];
                var opts={
                    flag:false,
                    nickname:nickname,
                    conData:conData
                }
                console.log(data)
                writeData(opts)
            }else{
                nickname=dataArr.join("");
                dataArr=[];
                if(client[nickname]){   //昵称是否被占用
                    nickname="";
                    socket.write("您的昵称已经被占用，请重新输入 aaa","utf8")
                }else{
                    client[nickname]=socket;
                    var opts={
                        flag:true,
                        nickname:nickname
                    }
                    writeData(opts)
                }
            }
            socket.resume();
        }else{
            dataArr.push(data)
        }
    })
    //客服端不正常退出时触发
    socket.on("error",function(){
        socket.destroy()
    })
    //客服端正常退出时触发
    socket.on("end",function(){
        console.log("end")
    })

    //客服端退出时触发
    socket.on("close",function(){
        var opts={
            nickname:nickname,
            exit:true
        }
        writeData(opts)
        server.unref();
    })

})
// 广播
function writeData(opts){
    console.log(opts)
    var nickname=opts.nickname,  //昵称
        flag=opts.flag || false,   //欢迎信息提示
        conData=opts.conData,  //对话内容
        exit=opts.exit || false;  //退出信息提示


    for(var name in client){
        if(name != nickname){
            if(flag){
                client[name].write("welcome "+nickname+" 加入聊天室！聊天室共有"+count+"人 \r\n","utf8")
            }else if(exit){
                client[name].write(nickname+" 退出 \r\n","utf8")
            }else{
                client[name].write(nickname+": "+conData+" \r\n","utf8")
            }
        }
    }
    client[nickname].resume();
}

var opt={
    host:"192.168.5.145",
    port:8066
}
server.listen(opt);
server.on("listening",function(){
    console.log(server.address())
})