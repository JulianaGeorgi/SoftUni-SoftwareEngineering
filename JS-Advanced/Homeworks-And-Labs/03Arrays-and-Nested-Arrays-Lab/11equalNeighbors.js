function equalNeighbors(matrix) {

    let pairsCounter = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i];
        let nextArr = matrix[i + 1];

        for (let j = 0; j < currentArr.length; j++) {
            if (currentArr[j] == currentArr[j + 1]) {
                pairsCounter++;
            }
            if (Array.isArray(nextArr)) {
                if (currentArr[j] == nextArr[j]) {
                    pairsCounter++
                }
            }
        }
    }
    return pairsCounter;
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]));

console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]));