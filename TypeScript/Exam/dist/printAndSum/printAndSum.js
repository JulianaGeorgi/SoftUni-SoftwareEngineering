"use strict";
function printAndSum(startNum, endNum) {
    let sum = startNum;
    let resultString = `${startNum}`;
    for (let i = startNum + 1; i <= endNum; i++) {
        sum += i;
        resultString += `${i}`;
    }
    console.log(`${resultString}\n Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
//# sourceMappingURL=printAndSum.js.map