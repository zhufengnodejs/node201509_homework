/**
 * Created by Administrator on 2015/12/30.
 */

function Parent(name){
    this.name=name;
    this._events={};
}


Parent.prototype.on=function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback)
    }else{
        this._events[eventName]=[callback];
    }
}

Parent.prototype.emit=function(eventName){
    var args=Array.prototype.slice.call(arguments,1);
    var callbacks=this._events[eventName];
    var self=this;
    callbacks.forEach(function(callback){
        callback.apply(self,args);
    })
}

Parent.prototype.removeListener=function(eventName,callback){
    this._events[eventName]=this._events[eventName].filter(function(cb){
        return cb!=callback;
    })
}
Parent.prototype.once=function(eventName,callback){

    function onceCallBack(){
        callback.apply(this,arguments);
        this.removeListener(eventName,onceCallBack);
    }

    this.on(eventName,onceCallBack)
}
var girl=new Parent();
girl.on('长发及腰',function(){
    console.log('我要娶你')
})
girl.on('长发及腰',function(){
    console.log('记得通知我')
})

girl.emit('长发及腰');

girl.once('18',function(style){
    console.log(style,'嫁张三')
});

girl.once('18',function(style){
    console.log(style,'嫁李四')
})

girl.once('23',function(style){
    console.log(style,'嫁李四')
})

girl.emit('18','快乐');
girl.emit('18','不情愿的');
girl.emit('23','拒绝的');