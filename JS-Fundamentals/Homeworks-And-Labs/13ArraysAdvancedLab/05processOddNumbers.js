function processOddNumbers(numbers) {

    let filteredElements = numbers.filter((el, i) => i % 2 == 1);

    let doubledNumbers = filteredElements.map(x => x * 2);

    let reversedNumbers = doubledNumbers.reverse();

    console.log(reversedNumbers.join(" "));
}

processOddNumbers([10, 15, 20, 25]);