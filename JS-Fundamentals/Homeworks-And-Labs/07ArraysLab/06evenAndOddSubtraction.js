function evenAndOddSubtraction(array){

    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < array.length; i++){
        array[i] = Number(array[i]);
    }

    for(let el of array){
        if(el % 2 === 0){
            evenSum+= el;
        } else {
            oddSum+= el;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

evenAndOddSubtraction([3,5,7,9]);