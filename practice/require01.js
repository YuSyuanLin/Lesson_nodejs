const {f1,f3} = require('./arrow-func'); //展開
const f2 = require(__dirname+'/arrow-func'); //比較明確的寫法 //沒展開

console.log('2:',__dirname);
console.log(f1(9));
console.log(f3(5));

console.log(f2.f1(5));
console.log(f2.f3(5));