/**
 * Created by wzz on 2016/1/14.
 */
var fs = require("fs");
var EventEmitter = require("events").EventEmitter;

var RETURN=0x0d;
var NEWLINE=0x0a;

function LineReader(path){
    this._rs = fs.createReadStream(path);
}

LineReader.prototype = Object.create(EventEmitter.prototype);

LineReader.prototype.on("newListener", function(eventName, func){
    var self = this;
    var count=1;
    var row = [];

    if(eventName == "newLine"){
        this._rs.on("readable", function(){
            var buff;
            while(null !=(buff=this.read(1))){
                if(buff[0]==RETURN){
                    this.read(1);
                    self.emit("newLine", Buffer.concat(row));
                    row.length=0;
                    count++;
                }else{
                    row.push(buff);
                }

            }
        });

        this._rs.on("end", function(){
            if(row.length >0){
                self.emit("newLine", Buffer.concat(row));
            }
            self.emit("end",count);
        });
        this._rs.on("error", function(err){
            console.log(err);
        })
    }

});


var reader = new LineReader('./read.txt');
reader.on('newLine',function(data){
    console.log(data.toString());
});
reader.on('end',function(info){
    console.log('总共'+info+"行");
});