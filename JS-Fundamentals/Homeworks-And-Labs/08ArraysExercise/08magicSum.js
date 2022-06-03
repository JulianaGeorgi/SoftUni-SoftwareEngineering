function magicSum(array, number) {

    let arrayOfValidPairs = [];
    let validPair = ' ';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === number) {
                validPair = `${array[i]} ${array[j]}`;
                arrayOfValidPairs.push(validPair);
            }
        }
    }

    console.log(arrayOfValidPairs.join('\n'));
}

magicSum([1, 7, 6, 2, 19, 23], 8);