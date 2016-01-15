var net = require('net');
var util = require('util');

var socket = new net.Socket({allowHalfOpen: true});
socket.setEncoding('utf8');

socket.connect(8081, 'localhost', function () {
    socket.write('hello,client1');
    socket.on('data', function (data) {
        console.log(data);
    });
});