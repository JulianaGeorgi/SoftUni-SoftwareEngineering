function addAndSubtract(input) {

    let originalArraySum = 0;
    let newArraySum = 0;
    let inputLength = input.length; // когато не променяме броя на елементите в масива!! 

    for (let n = 0; n < inputLength; n++) {
        originalArraySum += input[n];

        if (input[n] % 2 === 0) {
            input[n] += n;
        } else {
            input[n] -= n;
        }

        newArraySum += input[n];
    }

    console.log(input);
    console.log(originalArraySum);
    console.log(newArraySum);

}

addAndSubtract([5, 15, 23, 56, 35]);