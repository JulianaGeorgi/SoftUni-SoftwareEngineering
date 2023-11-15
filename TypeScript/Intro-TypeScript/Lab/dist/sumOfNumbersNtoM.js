"use strict";
function sumOfNumbersNtoM(N, M) {
    const numN = Number(N);
    const numM = Number(M);
    let sum = 0;
    for (let i = numN; i <= numM; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbersNtoM('1', '5'));
console.log(sumOfNumbersNtoM('-8', '20'));
//# sourceMappingURL=sumOfNumbersNtoM.js.map