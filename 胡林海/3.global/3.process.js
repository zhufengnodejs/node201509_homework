/**
 * Created by Administrator on 2015/12/29.
 */

console.log(process.cwd());
console.log(__dirname);
console.log(__filename);

process.chdir('..');
process.chdir('3.global');
console.log(process.cwd());
console.log(__dirname);
console.log(__filename);