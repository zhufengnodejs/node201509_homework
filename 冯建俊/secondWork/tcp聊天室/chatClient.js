/*
 1.创建TCP服务器
 2.客户端可以连接进来
 3.客户进来之后先设置呢称
 4.呢称不能重复
 5.接收用户的聊天信息，广播给所有人
 6.当用户进入或退出时通知大家
 7. 每当用户进入的时候显示当前的在线人数
 * */
var net =require("net");

var client=new net.Socket({allowHalfOpen:false,readable:true,writeable:true})
client.on("data",function(data){
    console.log("收到数据:%s",data)

})
client.on("error",function(){
    client.destroy();
})
var opts={
    post:"192.168.5.145",
    port:8066
}
client.connect(8066,"192.168.5.145",function(){
    //console.log("ddd")
    client.write("你好")
    /*setTimeout(function(){
        client.end("")
    },1000*5)*/
})
