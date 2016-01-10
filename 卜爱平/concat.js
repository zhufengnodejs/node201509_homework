/**
 * Created by dell-bo on 2015/12/27.
 */
function concat(list,length){
    var buffer=new Buffer(length)
    var index=0
    list.forEach(function(e){
            e.forEach(function(o){
                buffer[index++]=o;
            })
    })
    return buffer;
}
