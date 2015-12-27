var buf1=new Buffer([1,2,3]);
var buf2=new Buffer([4,5,6]);

var buf=concat([buf1,buf2],6);
console.log(buf);

function concat(list,length){
    var newbuf=new Buffer(length);
    for(i=0;i<list.length;i++){
        list[i].copy(newbuf,i*list[i].length,0,list[i].length);
    }
    return newbuf;
}
