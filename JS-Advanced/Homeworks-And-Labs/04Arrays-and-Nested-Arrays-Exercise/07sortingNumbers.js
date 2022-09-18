function sortingNumbers(numbers) {

    let res = [];
    numbers.sort((a, b) => a - b);

    while (numbers.length) {
        res.push(numbers.shift())
        res.push(numbers.pop())
    }
    return res;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]));