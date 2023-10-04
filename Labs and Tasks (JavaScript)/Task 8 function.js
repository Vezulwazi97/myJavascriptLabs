﻿function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}
console.log(fibbIter(4)); /*3*/
console.log(fibbIter(7)); /*13*/