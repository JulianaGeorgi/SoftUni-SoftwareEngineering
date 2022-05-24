function amazingNumbers(num) {

    let arrayOfDigits = Array.from(String(num), Number);
    let sum = 0;
    for(let i = 0; i < arrayOfDigits.length; i++){
        sum += arrayOfDigits[i];
    }

    const sumOfDigits = Array.from(String(sum), Number);

    let isAmazingNumber = sumOfDigits.includes(9) === true;
    if(isAmazingNumber){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1223);