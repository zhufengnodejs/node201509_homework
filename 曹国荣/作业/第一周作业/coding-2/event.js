function Person(name) {
    this.name = name;
    this._events = {};
}
//注册监听
Person.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {//有人已经订阅过了这个事件
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};
// 发射事件
Person.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function (callback) {
        // this是全局对象
        callback.apply(self, args);
    });
};
// 移除监听
Person.prototype.removeListener = function (eventName, callback) {
    this._events[eventName] = this._events[eventName].filter(function (cb) {
        // filter会返回true项组成的数组
        return cb != callback;
    });
};

