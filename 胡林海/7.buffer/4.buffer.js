/**
 * Created by Administrator on 2015/12/30.
 */
var buf1=new Buffer(3);
console.log(buf1)
buf1.fill(0);
console.log(buf1);
buf1[0]=0x61;
buf1[1]=0x62;
buf1[2]=0x63;
console.log(buf1);

console.log("=======================================");
var buf2=new Buffer([0x61,0x62,0x63]);
var buf3=new Buffer("abc",'utf-8');
console.log(buf2);
console.log(buf3);
console.log(buf1.toString()==buf2.toString());
console.log(buf2.toString()==buf3.toString());

console.log("=======================================");
var buf4=new Buffer('a','utf-8');
console.log(buf4);
var buf5=new Buffer('a','ascii');
console.log(buf5);

console.log("=======================================");
var str="珠峰培训";
var buf6=new Buffer(str,'utf-8');
console.log(str.length);
console.log(buf6.length);
console.log(buf6.toString('utf-8'));

console.log("=======================================");
str[0]='天';
console.log(str);
console.log(buf6);
var newStr=str.slice(1);
var newBuff=buf6.slice(1);
newBuff[1]=5;
console.log(buf6);

console.log("=======================================");
var buf7=new Buffer(12);
buf7.write("珠峰",0,6);
buf7.write("培训",6,6);
console.log(buf7.toString());

console.log("=======================================");
var buf8=new Buffer("珠峰培训");
console.log(buf8);
var buf81=buf8.slice(0,7);
var buf82=buf8.slice(7);
console.log(buf81.toString());
console.log(buf82.toString());

var StringDecoder=require("string_decoder").StringDecoder;
var decoder1=new StringDecoder();
var decoder2=new StringDecoder();
console.log(decoder1.write(buf81));
console.log(decoder1.write(buf82));

console.log("=======================================");
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,1,2);
console.log(tarBuf);

console.log("=======================================");
var srcBuf=new Buffer([1,2,3]);
var tarBuf=new Buffer([4,5,6]);
//console.log(Buffer.concat([srcBuf,tarBuf],6));
console.log(concat([srcBuf,tarBuf],6));
function concat2(arrBuffers,length){
    var buffer=new Buffer(length);
    var curIndex=0;
    arrBuffers.forEach(function(buf){
        buf.forEach(function(b){
            buffer[curIndex++]=b;
        })
    });
    return buffer.slice(0,curIndex);
}

function concat(arrBuffers,length){
    if(arrBuffers.length==1){
        return arrBuffers[0];
    }
    if(length==undefined){
        length=0;
        arrBuffers.forEach(function(buffer){
            length+=buffer.length;
        })
    }

    var buffer=new Buffer(length);
    var curIndex=0;
    arrBuffers.forEach(function(buf){
        buf.forEach(function(b){
            buffer[curIndex++]=b;
        })
    });
    return buffer.slice(0,curIndex);
}

console.log("=======================================");
var buffer1 = new Buffer("张三");
var buffer2 = new Buffer("吃饭");

var buffer3=concat([buffer1,buffer2],100);
console.log(buffer3.toString());