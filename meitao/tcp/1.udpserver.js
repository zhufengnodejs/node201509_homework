var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var port;
var address;
socket.on('message',function(msg,rinfo){
    console.log(msg.toString());
    //console.log(rinfo);
    port=rinfo.port;
    address=rinfo.address;
    socket.send(msg,0,msg.length,rinfo.port,rinfo.address);
    console.log(port);
    console.log(address);
});
socket.bind(41234,'localhost');







