function negativePositiveNumbers(numbers) {

    let res = [];

    for (let num of numbers) {
        num < 0
            ? res.unshift(num)
            : res.push(num);
    }
    console.log(res.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers("-");
negativePositiveNumbers([3, -2, 0, -1]);