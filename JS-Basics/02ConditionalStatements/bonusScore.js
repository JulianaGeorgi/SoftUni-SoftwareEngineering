function bonusScore(input){

    let baseNumber = Number(input[0]);
    let bonus = 0.0;

    if(baseNumber <= 100) {
        bonus = 5;
    } else if(baseNumber <= 1000) {
        bonus = baseNumber * 0.2;
    } else {
        bonus = baseNumber * 0.1;
    }

    if(baseNumber % 2 == 0){
        bonus += 1;
    } else if(baseNumber % 10 == 5){ // to check if a number ends at 5 you have to divide it by 10 and get 5
        bonus += 2;
    }

    console.log(bonus);
    console.log(baseNumber + bonus);

}

bonusScore([20]);