/**
 * Created by hejinjun on 16/1/1.
*2. 实现一个简单的事件监听 包括添加监听 发射事件 移除监听
 */

function CustomEvent(){
    this._eventStack = {};
}

CustomEvent.prototype.on=function(eventName,callback){
    if(!this._eventStack[eventName]){
        this._eventStack[eventName] = [];
    }
    this._eventStack[eventName].push(callback);
}

CustomEvent.prototype.dispatchEvent = function(eventName){
    var arg = Array.prototype.slice.call(arguments,1);
    var callbacks = this._eventStack[eventName];
    var self = this;
    callbacks.forEach(function(callback){
        callback.apply(self,arg)
    })
}


CustomEvent.prototype.removeListener = function(eventName,callback){
    this._eventStack[eventName] = this._eventStack[eventName].filter(function(cb){
        return cb != callback;
    });
}


var event = new CustomEvent();
event.on('init',initFunction);

function initFunction(){
    console.log('I\'m listen init event');
}
event.removeListener('init',initFunction)


event.dispatchEvent('init');