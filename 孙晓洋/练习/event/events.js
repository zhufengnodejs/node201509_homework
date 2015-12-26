/**
 * 事件
 * 订阅发布
 **/
function Person(name){
    this.name = name;
    this._events = {};
}
//注册监听
Person.prototype.on = function(eventName,callback){
    if(this._events[eventName]){//有人已经订阅过了这个事件
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
}

Person.prototype.emit = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function(callback){
        callback.apply(self,args);
    });
}
Person.prototype.once = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    callbacks.pop();
}
var boy=new Person();
boy.on('当你成年时',function(){
   console.log('你就独立啦！');
});
boy.on('当你成年时',function(){
    console.log('你就可以结婚啦');
});
boy.once('当你成年时');
boy.emit('当你成年时');


