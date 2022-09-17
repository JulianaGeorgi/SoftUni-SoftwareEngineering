function biggestElement(matrix) {

    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];
        const currentMax = Math.max(...currentArr);
        res.push(currentMax);
    }
    return max = Math.max(...res);
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));

console.log("-------------");

console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));