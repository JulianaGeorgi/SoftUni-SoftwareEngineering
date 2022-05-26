function sumOfNumbers(input) {

    let numText = "" + input[0];   //concotanate with empthy string for the number to become string!!; let num = 1000; //console.log(input[0]) - undefined - не могат да се взимат от числа, само от стрингове
    let sum = 0;

    for (let i = 0; i < numText.length; i++) {
        let n = Number(numText.charAt(i));
        sum += n;
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"]);