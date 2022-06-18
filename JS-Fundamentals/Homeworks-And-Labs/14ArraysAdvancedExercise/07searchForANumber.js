function searchForANumber(arrayToModify, commands) {

    let firstCut = commands.shift();
    let secondCut = commands.shift();
    let specialNum = commands.pop();
    let specialNumCount = 0;

    let arrayAfterFirstCut = arrayToModify.slice(0, firstCut);
    let arrayAfterSecondCut = arrayAfterFirstCut.slice(secondCut);


    for (let i = 0; i < arrayAfterSecondCut.length; i++) {
        if (arrayAfterSecondCut[i] === specialNum) {
            specialNumCount++;
        }
    }

    console.log(`Number ${specialNum} occurs ${specialNumCount} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);