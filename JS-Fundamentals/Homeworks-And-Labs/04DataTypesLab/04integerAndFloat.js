function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;

    if(Number.isInteger(sum) === true){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

    if(sum % 0 === 0){
        console.log('true');
    } else {
        console.log("false");
    }

}

integerAndFloat(100, 200, 30.3);