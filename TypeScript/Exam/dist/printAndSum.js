"use strict";
function printAndSum(startNum, endNum) {
    let sum = startNum;
    for (let i = startNum + 1; i <= endNum; i++) {
        sum += i;
        console.log(i);
    }
    console.log(sum);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
//# sourceMappingURL=printAndSum.js.map