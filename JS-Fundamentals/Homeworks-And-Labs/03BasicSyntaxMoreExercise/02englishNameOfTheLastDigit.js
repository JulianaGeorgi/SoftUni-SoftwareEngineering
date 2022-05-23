function englishNameOfTheLastDigit (num){

    let numbersInEnglish = ['zero', 'one', 'wwo', 'three', 'four', 'five' , 'six', 'seven', 'eight', 'nine'];
    let lastDigit = num % 10;

    console.log(numbersInEnglish[lastDigit]);
}

englishNameOfTheLastDigit(512);