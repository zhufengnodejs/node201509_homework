/**
 * Created by Administrator on 2015/12/30.
 */
exports.loaded=function(){
    console.log(module.loaded);
}

console.log('a开始加载');
exports.name='zfpx';

console.log('module parent',module.parent)