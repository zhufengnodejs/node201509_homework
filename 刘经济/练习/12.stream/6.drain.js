var fs = require('fs');
var ws = fs.createWriteStream('./write1.txt',{
    highWaterMark: 1024
});
writeMillion(ws, 'data\n', 'utf-8', function() {console.log('compelite')})
function writeMillion(writer, data, encoding, callback) {
    var i = 1000000;
    write();

    function write() {
        var ok = true;
        do{
            i -= 1;
            if(i == 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
                console.log(ok)
            }
        }while(i>0 && ok)
        if(i > 0) {
            writer.once('drain', function() {
                write();
            })
        }
    }
}