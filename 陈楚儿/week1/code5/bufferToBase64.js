function base64(str){
    var buf = new Buffer(str),
        arr =[],
        result = '';
    for (var i = 0; i < buf.length; i++){
        arr.push(('000000000' + buf[i].toString(2)).substr(-8));
    }
    result = dataTrans(arr.join(''));
    return result;
};

function dataTrans(str){
    var endStr = "";
    var strObj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result = '';
    switch (str.length % 24){
        case 0:
            break;
        case 8:
            endStr = '==';
            break;
        default:
            endStr = '=';
    };
    switch (str.length % 6){
        case 2:
            str += '0000';
            break;
        case 4:
            str += '00';
    };
    for (var i = 0, strLen = str.length; i < strLen; i = i + 6){
        var n = parseInt(str.substr(i, 6), 2);
        result += strObj[n];
    }
    return result + endStr;
}
console.log(base64('陈a123'));
console.log(base64('珠a'));