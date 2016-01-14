var net = require('net');
var util = require('util');
var clients = [];
var server = net.createServer(function(socket) {
    var nickname;
    socket.setEncoding('utf-8');
    server.getConnections(function(err,count){
        socket.write('当前共有'+count+'在线，请输入用户名：\r\n>');
    });
    socket.on('data', function(data) {
        data = data.replace(/\r\n/, '');
        if(nickname) {
            broadcast(nickname, nickname + '说：' + data + '\r\n');
        } else {
            nickname = data;
            if(nickname in clients) {
                socket.write('昵称已经被占用，请使用其他昵称：\r\n');
                nickname = undefined;
            } else {
                clients[nickname] = socket;
                broadcast(nickname, '欢迎' + nickname + '进入聊天室\r\n');
            }

        }
    });
    socket.on('end', function(data) {
        broadcast(nickname, nickname + '离开聊天室\r\n');
        clients[nickname].destroy();
        delete clients[nickname]
    });
    socket.on('error',function(){

    });
    socket.on('close',function(){

    });
});
server.listen(8089);

function broadcast(name, msg) {
    for(var n in clients) {
        if(n != name) {
            clients[n].write(msg);
        }
    }
}