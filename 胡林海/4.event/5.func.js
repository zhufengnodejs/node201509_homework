/**
 * Created by Administrator on 2015/12/30.
 */
function say(name,world){
    console.log(name,":",world)
}

function newSay(){
    say.apply(null,['张三'].concat(Array.prototype.slice.call(arguments)));
}

newSay('我爱你');
newSay('I LOVE YOU');


function eat(times,callback){
    return function(){
        times--;

        if(times==0){
            callback();
        }
    }
}

var newEat=eat(5,function(){
    console.log('吃完了');
});

newEat();
newEat();
newEat();
newEat();
newEat();