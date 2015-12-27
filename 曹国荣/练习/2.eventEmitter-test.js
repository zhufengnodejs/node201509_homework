var EventEmitter = require('events');

var util = require('util');

function Water(event) {
    this.event = event;
}

util.inherits(Water, EventEmitter);

var water = new Water(event);

water.on('boil', function() {
    console.log('烧开');
});
water.addListener('boil', function() {
    console.log('烧开2');
});
// water.removeAllListeners('boil');

var drink = function(who) {
    console.log(who, '喝水');
}

water.once('drink', drink);
water.emit('boil');