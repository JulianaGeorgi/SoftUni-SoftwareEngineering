let myArr = [10, 20, 30, 40, 50]

console.log(myIncludes(myArr, 20));
console.log(myArr.includes(20));

function myIncludes(arr, value) {
    for (el of arr) {
        if (el === value) {
            return true;
        }
    }
    return false;
}


console.log(myIndexOf(myArr, 40));

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    retunr - 1;
}