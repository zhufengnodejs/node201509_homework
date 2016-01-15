var buffer = new Buffer('王海波');

function Base64Encode(buffer) {
    console.log(buffer);
    var tmp = [];
    buffer.forEach(function (buf) {
       tmp.push(parseInt(buf));
    });
    console.log(tmp);
    tmp.forEach(function (item, index) {
        tmp[index] = item.toString(2);
    });
    var tmp1 = tmp.join('');
    console.log(tmp1);
}

Base64Encode(buffer);