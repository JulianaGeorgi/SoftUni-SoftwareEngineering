function condenseArrayToNumber(numbers){

    let result = [];

    result[0] = numbers[0] + numbers[1];
    result[1] = numbers[1] + numbers[2];
    result[2] = numbers[2] + numbers[3];
    result[3] = numbers[3] + numbers[4];

    console.log(result);

}

condenseArrayToNumber([5,0,4,1,2]);