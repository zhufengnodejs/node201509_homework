/**
 * Created by hejinjun on 16/1/1.
 * 3. 如何读取一个txt文本，并且解决乱码问题
 */
var fs = require('fs');

fs.readFile('test.txt','utf-8',function(err,data){
    console.log(data);
})