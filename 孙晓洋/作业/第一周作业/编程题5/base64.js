//只适合中文
function base64(str){
    var result="";
    var utilString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    utilString += utilString.toLowerCase();
    utilString += '0123456789';
    utilString += '+/';

    var buf = new Buffer(str);
    var base2="";//二进制字符串
    var base10Arr=[];
    for(i=0;i<buf.length;i++){//转换二进制
        base2+=(buf[i]).toString(2);
    }
    for(i=0;i<base2.length/6;i++){//拆分二进制字符串并转换为10进制
        var c='00'+base2.substring(i*6,i*6+6);
        base10Arr.push(parseInt(c,2));
    }
    for(i=0;i<base10Arr.length;i++){
        result+=utilString[base10Arr[i]];
    }
    return result;
}
console.log(base64('孙晓洋'));