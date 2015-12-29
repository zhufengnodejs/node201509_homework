function base64(str){
    var buf=new Buffer(str);
    var arrB=[];
    var result;
    var bStr;
    for(var i=0;i<buf.length;i++){
        var bf="";
        switch (buf[i].toString("2").length){
            case 1:
                bf="0000000"+buf[i].toString("2");
                break;
            case 2:
                bf="000000"+buf[i].toString("2");
                break;
            case 3:
                bf="00000"+buf[i].toString("2");
                break;
            case 4:
                bf="0000"+buf[i].toString("2");
                break;
            case 5:
                bf="000"+buf[i].toString("2");
                break;
            case 6:
                bf="00"+buf[i].toString("2");
                break;
            case 7:
                bf="0"+buf[i].toString("2");
                break;
            default:
                bf=buf[i].toString("2")
        }
        arrB.push(bf)
    }
    bStr=arrB.join("");
    result=handleBinary(bStr);
    return result;
}
function handleBinary(bStr){
    var i=0;
    var lastStr="";
    var charStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result=""
    switch (bStr.length%24){
        case 0:
            break;
        case 8:
            lastStr="==";
            break;
        default:
            lastStr="=";
    }
    switch (bStr.length%6){
        case 2:
            bStr+="0000";
            break;
        case 4:
            bStr+="00";

    }
    for(var i= 0,sLen=bStr.length;i<sLen;i=i+6){
        var num=parseInt(bStr.substr(i,6),"2");
        result+=charStr[num];
    }
    return result+lastStr;
}
module.exports=base64;