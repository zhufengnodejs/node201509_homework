function Event() {
    this._events = {};
}

Event.prototype.addEventListener = function (eventName, callback) {
    if(typeof callback == 'function') {
        if(this._events[eventName]) {
            this._events[eventName].push(callback);
        }else {
            this._events[eventName] = [callback];
        }
    } else {
        throw new Error('callback need to be a function');
    }
};

Event.prototype.removeEventListener = function (eventName, callback) {
    if(this._events[eventName]) {
        if(callback && typeof callback == 'function') {
            var callbacks = this._events[eventName];
            var index = Array.prototype.indexOf.call(callbacks, callback, 0);
            callbacks.splice(index, 1);
        }else if(!callback) {
            delete this._events[eventName];
        }else {
            throw new Error('callback need to be a function');
        }
    }else {
        throw new Error('you have not subscribe ' + eventName + ' event');
    }
};

Event.prototype.emmit = function(eventName) {
    var _self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    if(this._events[eventName]) {
        var callbacks = this._events[eventName];
        callbacks.forEach(function (item) {
            item.apply(_self, args);
        })
    }else {
        throw new Error('you have not subscribe ' + eventName + ' event');
    }
};

var event = new Event();

event.addEventListener('click', function (name) {
    console.log((name === undefined ? 'i' : name) +  ' subscribe a click event');
});

event.addEventListener('click', function () {
    console.log('i subscribe a click event 1');
});

event.emmit('click', 'joshua');

var callback = function () {
    console.log('i subscribe a click event 1');
};

event.removeEventListener('click', callback);

event.emmit('click');

event.removeEventListener('click');

event.emmit('click');
