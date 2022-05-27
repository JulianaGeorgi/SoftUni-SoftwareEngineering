function sumDigits(num){

    let numAsString = num.toString(); // or num + " "
    let sumOfAllDigits = 0;

    for(let index = 0; index < numAsString.length; index++){
        let currentDigit = Number(numAsString[index]);
        sumOfAllDigits+= currentDigit;   
    }

    console.log(sumOfAllDigits);
}

sumDigits(245678);