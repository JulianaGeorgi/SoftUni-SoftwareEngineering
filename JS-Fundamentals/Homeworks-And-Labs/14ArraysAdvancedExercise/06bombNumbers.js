function bombNumbers(array, bombArray) {

    let bomb = bombArray.shift();
    let bombPower = bombArray.shift();

    while (array.includes(bomb)) {
        let indexOfBomb = array.indexOf(bomb);
        let toEliminate = 1 + (bombPower * 2);
        let startingIndex = indexOfBomb - bombPower;

        if (startingIndex < 0) {
            startingIndex = 0;
        }

        array.splice(startingIndex, toEliminate);
    }

    let arrayAfterBombSum = array.reduce((partialSum, a) => partialSum + a, 0);

    console.log(arrayAfterBombSum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);