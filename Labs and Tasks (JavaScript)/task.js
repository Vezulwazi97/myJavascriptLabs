let Bool = true;
let num = 25;
let int = 25n;
let str = "twenty five";
let undef = undefined;


let Bool1 = Boolean(true);
let num1 = Number(25);
let int1 = BigInt(25);
let str1 = String('Twenty Five');

console.log(`${Bool} [${typeof Bool}]`);
console.log(`${num} [${typeof num}]`);
console.log(`${int} [${typeof int}]`);
console.log(`${str} [${typeof str}]`);
console.log(`${Bool1} [${typeof Bool1}]`);
console.log(`${num1} [${typeof num1}]`);
console.log(`${int1} [${typeof int1}]`);
console.log(`${str1} [${typeof str1}]`);
console.log(`${undef1} [${typeof undef1}]`);

const str2 = String('1234');
const num2 = Number(str);
const int2 = BigInt(num);
const Bool2 = Boolean(int);  
console.log(`${Bool2} [${typeof Bool2}]`);
