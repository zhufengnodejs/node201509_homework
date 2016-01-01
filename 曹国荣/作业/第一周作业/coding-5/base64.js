function base64(str) {
    var buf = new Buffer(str);
    var arr = [];
    var result;
    for (var i = 0; i < buf.length; i++) {
        arr.push(("000000000" + buf[i].toString(2)).substr(-8));
    }
    result = handleBinary(arr.join(''));
    return result;
}
function handleBinary(str) {
    var lastStr = "";
    var charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result = "";
    switch (str.length % 24) {
        case 0: 
            break;
        case 8: 
            lastStr = "==";
            break;
        default:
            lastStr = "=";
    }
    switch (str.length % 6) {
        case 2:
            str += "0000";
            break;
        case 4:
            str += "00";
    }
    for (var i = 0, sLen = str.length; i < sLen; i = i + 6) {
        var num = parseInt(str.substr(i, 6), 2);
        result += charStr[num];
    }
    return result + lastStr;
}

console.log(base64('珠a'));

