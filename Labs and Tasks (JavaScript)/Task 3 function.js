let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;



console.log(add(2,3));
console.log(mult(2,5));
console.log(sub(4,3));
