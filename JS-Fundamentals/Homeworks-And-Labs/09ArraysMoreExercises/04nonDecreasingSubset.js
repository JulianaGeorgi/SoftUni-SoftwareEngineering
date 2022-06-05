function nonDecreasingSubset(numbersArray) {

    let isBiggestNum = 0;
    let newArray = [];

    for (let i = 0; i < numbersArray.length; i++) {

        let currentNum = numbersArray[i];
        if (currentNum >= isBiggestNum) {
            isBiggestNum = currentNum;
            newArray.push(currentNum);
        } else {
            continue;
        }
    }

    console.log(newArray.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);