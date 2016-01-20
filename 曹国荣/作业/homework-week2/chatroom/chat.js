var net = require('net');
var util = require('util');
var clients = {};
var server = net.createServer(function (socket) { // 每次有客户端进来会连接1次
    var nickname;
    socket.setEncoding('utf8');
    server.getConnections(function (err, count) {
        socket.write('欢迎光临，当前在线' + count + '人，请输入用户名\r\n>');
    });
    socket.on('data', function (data) {
        //console.log(new Buffer(data));
        data = data.replace(/\r\n/, ''); // 把换行回车截取掉
        if (nickname) {
            broadcast(nickname, nickname + ":" + data + '\r\n');
        } else {
            nickname = data;
            clients[nickname] = socket;
            broadcast(nickname, nickname + '加入了聊天室\r\n');
        }
    });
    socket.on('end', function () {
        broadcast(nickname, nickname + '离开了聊天室\r\n');
        clients[nickname].destroy();
        delete clients[nickname];
    });
    socket.on('error', function () {
        // 捕获错误, 退出时不会报错
    });
    socket.on('close', function () {

    });
});
function broadcast(nickname, msg) {
    for (var name in clients) {
        if (nickname != name) {
            clients[name].write(msg);           
        }
    }
}
server.listen(8888);