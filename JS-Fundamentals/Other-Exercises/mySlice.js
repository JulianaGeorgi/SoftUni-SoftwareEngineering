let myArr = [10, 20, 30, 40, 50, 60, 70];
let result = mySlicer(myArr, 2, 4);
console.log(result);

function mySlicer(arr, startIndex, endIndex) { // няма да работи за отрицателен индекс; трябва да се допише ;)

    let res = [];
    if (startIndex && endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            res.push(arr[i]);
        }
    } else if (!startIndex && !endIndex) {
        for (let el of arr) {
            res.push(el);
        }
    } else if (startIndex && !endIndex) {
        for (let i = startIndex; i < arr.length; i++) {
            res.push(arr[i]);
        }
    }

    return res;
}