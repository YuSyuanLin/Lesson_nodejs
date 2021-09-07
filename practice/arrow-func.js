const f1 = a => a*a;
const f3 = a=>a*a*a;

//console.log(f1(6));
//console.log(f3(5));

// console.log('1:',__dirname);

// module.exports = f1; // 匯出
module.exports = {f1,f3};