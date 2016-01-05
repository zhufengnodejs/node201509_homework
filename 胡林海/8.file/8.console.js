/**
 * Created by Administrator on 2015/12/30.
 */

var fs=require('fs');


setTimeout(function(){
    var buffer=new Buffer(1);
    fs.read(0,buffer,0,1,0,function(){
        console.log(buffer.toString());
    })
},1000)