var fs = require('fs');
var rs = fs.createReadStream('./request.txt');
var StringDecoder = require('string_decoder').StringDecoder;
function parseHeader(callback) {
    var headers = '';

    rs.on('readable', onReadable);
    var decoder = new StringDecoder();
    function onReadable() {
        var chunk ;
        while(null != (chunk = rs.read())) {
            var str = decoder.write(chunk);

            if(str.match(/\r\n\r\n/)) {
                rs.removeListener('readable', onReadable);
                var splites = str.split(/\r\n\r\n/);
                headers += splites.shift();

                var remain = splites.join('\r\n\r\n')
                var buf = new Buffer(remain, 'utf-8');
                if(buf.length) {
                    rs.unshift(buf);
                }
                callback(headers)
            } else {
                headers += str;
            }
        }
    }
}

parseHeader(function (headers) {
    console.log(headers);
    rs.on('data', function(data) {
        console.log(data.toString())
    })
})
