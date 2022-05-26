function catDiet(input){

    let fatsPercentage = Number(input[0]);
    let proteinsPercentage = Number(input[1]);
    let carbsPercentage = Number(input[2]);
    let caloriesTotal = Number(input[3]);
    let waterContentPercentage = Number(input[4]);

    let fatsGrams = ((fatsPercentage * caloriesTotal) / 100) / 9;
    let proteinsGrams = ((proteinsPercentage * caloriesTotal) / 100) / 4;
    let carbsGrams = ((carbsPercentage * caloriesTotal) / 100) / 4;

    let foodTotalGrams = fatsGrams + proteinsGrams + carbsGrams;
    let caloriesPerGram = caloriesTotal / foodTotalGrams;

    let caloriesWithoutWater = (caloriesPerGram - (waterContentPercentage * caloriesPerGram / 100)).toFixed(4);


    console.log(caloriesWithoutWater);

}

catDiet(["60","25","15","2500","60"]);