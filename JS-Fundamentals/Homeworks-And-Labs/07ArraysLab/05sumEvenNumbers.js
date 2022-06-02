function sumEvenNumbers(stringArray) {

    let numberArray = [];
    let sum = 0;

    for(let i = 0; i < stringArray.length; i++) {

        numberArray.push(parseInt(stringArray[i]));
    }

    for(let el of numberArray){
       
        if(el % 2=== 0){
            sum+= el;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['2','4','6','8','10']);