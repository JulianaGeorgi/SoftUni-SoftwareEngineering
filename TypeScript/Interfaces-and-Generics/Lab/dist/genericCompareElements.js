"use strict";
class CompareElements {
    constructor(array) {
        this.array = array;
    }
    compare(elToCompare) {
        const filteredArray = this.array.filter((el) => el == elToCompare);
        const res = filteredArray.length;
        return res;
    }
}
// let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(c.compare('b'));
let e = new CompareElements([2, 3, 4, 5]);
console.log(e.compare(1));
//# sourceMappingURL=genericCompareElements.js.map