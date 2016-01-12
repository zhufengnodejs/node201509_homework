var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
///r/n 0x0d 0x0a
// http://baike.baidu.com/link?url=ZwIraTFCTerLt5dqA-DLufYtnzCnwJJVDkyWnU-6zEFq15P7YBOzX4m5Bu4LHtuT_34TPwo9lfaJwpQWuDfMK_
var RETURN= 0x0d; // ascii \r       十六进制的d就等于十进制的13  回车 return 移动光标到该行的起始位置
var NEWLINE = 0x0a; // ascii  \n   十六进制的a等于十进制的10 换行 newline 换行至下一行行首起始位置

function LineReader(path){
    this._rs = fs.createReadStream(path,'r',{highWaterMark:2});
}


util.inherits(LineReader,EventEmitter);

LineReader.prototype.on('newListener',function(name,func){
    var self=this;
    var ok=false;
    this.dataArr=[];
    function read(){
        var data;
        //var dataArr=[];
        while(null!=(data=self._rs.read(1))){
            if(ok){
                if(data[0] === NEWLINE){
                    var buf=new Buffer(self.dataArr);
                    if(buf.length>0){
                        self.emit("newLine",buf)
                    }
                    self.dataArr=[]
                    ok=false;
                }
            }else if(data[0] === RETURN){
                ok=true;
            }else{
                self.dataArr.push(data[0])
            }
        }
    }
    if(name === "newLine"){
        this._rs.on("readable",read)
    }
    if(name === "end"){
        this._rs.on("end",function(){
            if(self.dataArr.length>0){
                var bufEnd=new Buffer(self.dataArr);
                self.emit("newLine",bufEnd)
                delete self.dataArr
            }
            self.emit("end")
        })
    }

});

var reader = new LineReader('./read.txt');
reader.on('newLine',function(data){
    console.log(data.toString(),"dd");
});
reader.on('end',function(){
    console.log('end');
});
