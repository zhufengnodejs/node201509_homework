function concat(array){
    // console.log(array.length)
    if(!array)return
    //if(!length)return
    console.log(array.length)
    if(array.length==1){
        return array[0];
    }
    var length=0;
    array.forEach(function(currArray){
        //console.log(length);
        length=length+currArray.length;
    })
    console.log(length)
    var newArray=new Buffer(length);
    var index=0;
    array.forEach(function(currArray){
        currArray.copy(newArray,index);
        index=index+currArray.length;
    })
    return newArray.slice(0,index);

}

var buff=new Buffer("新年");
var buff1=new Buffer("快乐!");
var buff2=concat([buff,buff1])
console.log(buff2.toString());