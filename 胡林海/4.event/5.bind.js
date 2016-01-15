/**
 * Created by Administrator on 2015/12/30.
 */

function Person(){
    this.name='zfpx';
    return {name:'zf'};
}

var p=new Person();
console.log(p.name);


var p2=Person.bind({name:'px'});
var p2=new p2;
console.log(p2.name);