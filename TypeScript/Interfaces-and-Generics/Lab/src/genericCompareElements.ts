class CompareElements<T> {
    array: T[];
    constructor(array: T[]) {
        this.array = array;
    }

    compare (elToCompare: T): number {
        const filteredArray: T[] = this.array.filter((el) => el == elToCompare);
        const res = filteredArray.length;
        return res;
    }
}

// let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
// console.log(c.compare('b'));

let e = new CompareElements([ 2, 3, 4, 5]);
console.log(e.compare(1));