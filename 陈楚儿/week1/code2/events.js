function SelfEvent(){
    this._events = this._events || {};
}

SelfEvent.prototype = {
    on: function(eventName,callback){   //注册监听
        if(this._events[eventName]){
            this._events[eventName].push(callback);
        }else{
            this._events[eventName] = [callback];
        }
    },
    emit: function(eventName){  //发射监听
        var args = Array.prototype.slice.call(arguments, 1);
        var callbacks = this._events[eventName];
        var me = this;
        callbacks.forEach(function(callback){
            callback.apply(me, args);
        })
    },
    remove: function(){  // 删除监听
        delete this;
    }
};
var test = new SelfEvent();
test.on('data', function(){
    console.log('回调1: ' + new Date().toString());
});
test.on('data', function(){
    console.log('回调2: ' + new Date().toString());
});
test.emit('data');
test.remove();