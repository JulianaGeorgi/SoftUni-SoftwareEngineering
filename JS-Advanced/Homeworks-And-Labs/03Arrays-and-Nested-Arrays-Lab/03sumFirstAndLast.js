function sumFirstAndLast(arr) {

    arr = arr.map(Number)
    let first = arr.shift();
    let last = arr.pop();
    return first + last;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));