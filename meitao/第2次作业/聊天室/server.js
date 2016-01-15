var net = require('net');
var util = require('util');
var clientnames = [];
var index = 1;

///保存socket
function pushclientinfo(socket) {
    var flag = 0;
    clientnames.forEach(function (client) {
        if ((client.remoteAddress + ':' + client.remotePort) == (socket.remoteAddress + ':' + socket.remotePort)) {
            flag = 1;
            return client;
        }
    })

    if (flag == 0) {
        socket.name = "用户" + index++;
        clientnames.push(socket);
        return socket;
    }
}

///广播群发
function broadcast(message, client1) {

    for (var i = 0; i < clientnames.length; i++) {
        if (client1 != clientnames[i]) {

            console.log(client1.name + " says " + message);
            clientnames[i].write(client1.name + " says " + message);
        }
    }
}

var server = net.createServer({allowHalfOpen: true}, function (socket) {
    // console.log(socket.remoteAddress + ':' + socket.remotePort);
    ///保存用户信息
    var socket = pushclientinfo(socket);

    ///用户进入通知大家
    broadcast(socket.name + '进入聊天室', socket);


    //查看当前连接数量
    server.getConnections(function (err, count) {
        console.log('现在在线人数为 ' + count);
    });


    socket.on('data', function (data) {
        console.log(data.toString('utf8'));
        broadcast(data.toString('utf8'), socket);
    });


    socket.on('error', function (err) {
        console.log(err);
        socket.destroy();
    })

    ////用户退出通知大家
    socket.on('end', function (err) {
        clientnames.splice(clientnames.indexOf(socket), 1);
        broadcast(socket.name + '退出', socket);
    })


    socket.on('close', function (err) {
        console.log(err);
        socket.destroy();
    })

});

server.on('error', function (err) {
    console.log(err);
});
server.listen(8081, function () {

});