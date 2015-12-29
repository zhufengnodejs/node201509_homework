/**
 * Created by fengjj on 2015/12/29.
 */
function SelfEvent(){
    this.fnArr=[];
}
SelfEvent.prototype={
    constructor:"SelfEvent",
    on:function(eventName,callback){
        if(!this.fnArr[eventName]){
            this.fnArr[eventName]=[];
        }
        var flag=this.fnArr[eventName].every(function(fn){
            console.log(fn !== callback)
            return fn !== callback;
        })
        if(flag){
            this.fnArr[eventName].push(callback);
        }
    },
    emit:function(eventname){
        if(!!this.fnArr[eventname]){
            var args=Array.prototype.slice(arguments,1);
            var self=this;
            this.fnArr[eventname].forEach(function(fn){
                fn.apply(self,args);
            })
        }
    },
    removeListen:function(eventname,listener){
        if(!this.fnArr[eventname]){
            return false;
        }
        if(!!eventname){
            if(!!listener){
                this.fnArr[eventname].filter(function(fn){
                    console.log(fn.name)
                    return fn !== listener;
                })
                console.log(this.fnArr[eventname].length)
            }else{
                delete this.fnArr[eventname];
            }

        }else{
            this.fnArr=[];
        }
    },
    once:function(eventname,callback){
        var self=this;
        function onceFn(){
            callback.call(self);
            self.removeListen(eventname,onceFn);
        }
        this.on(eventname,onceFn)

    }
}
//moudule.exports=SelfEvent;
var event=new SelfEvent();
function a1(){
    console.log("a1")
}
function a2(){
    console.log("a2")
}
function once(){
    console.log("once");
}
event.on("a",a1);
/*
event.on("a",a2);
event.on("a",a2);
event.on("b",a1);
event.on("b",a2);
event.emit("a")
event.removeListen("a");
event.emit("a")
event.emit("b")
event.removeListen();
event.emit("a")
event.emit("b")*/
event.once("a",once);
event.emit("a")
event.emit("a")
