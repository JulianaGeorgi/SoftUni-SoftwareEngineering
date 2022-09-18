function diagonalSums(matrix) {

    let mainSum = 0;
    let secondarySum = 0;
    let secondaryIndex = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];
        mainSum += currentArr[i];
        secondarySum += currentArr[secondaryIndex];
        secondaryIndex--;
    }
    console.log(`${mainSum} ${secondarySum}`);
}

diagonalSums([[20, 40],
[10, 60]]);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);