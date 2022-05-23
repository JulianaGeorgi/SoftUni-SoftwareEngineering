function rounding(number, precision){

    if (precision > 15) {
       precision = 15; 
    }

    let roundedNum = number.toFixed(precision);

    console.log(parseFloat(roundedNum));

}

rounding(10.5,3);