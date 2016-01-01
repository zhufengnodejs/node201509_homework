/**
 * Created by meitao1 on 2015/12/27.
 */
var buf1=new Buffer([1,2,3]);
var buf2=new Buffer([4,5,6]);

var buf=concat([buf1,buf2],6);
console.log(buf);
console.log(buf.toString());

function concat(list,length)
{   var result=new Buffer(length);
    var i=0;
    list.forEach(function(data)
    {

        console.log(i);
       // result.copy(data, i ,data.byteLength)
        data.copy(result, i,0,data.byteLength)
        i=i+data.byteLength;
    })


    return result;
}
