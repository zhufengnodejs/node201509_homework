var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.on('message',function(msg,rinfo){
    console.log(msg.toString());
    console.log(rinfo);
});
socket.send(new Buffer('培训'),0,6,57301,'localhost',function(err,bytes){
    console.log('发送了个%d字节',bytes);
});
