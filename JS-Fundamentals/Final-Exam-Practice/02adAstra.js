function adAstra(input){

    let days = 0;
    let dailyCalories = 2000; 
    let foodBox = [];

    let pattern = /(#|\|)(?<product>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let foodItems = pattern.exec(input); // breaks it in an array with groups

    while (foodItems) { // when there are not matches -> null -> falsy

        days += Number(foodItems[4]) / dailyCalories;
        foodBox.push({product: foodItems[2], date: foodItems[3], calories: foodItems[4]}); // array in which we add object with the different items (using the groups)

        foodItems = pattern.exec(input)
    }

    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    
    for(const item of foodBox){
        console.log(`Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.calories}`);// accessing the values for each key of the different
    }
}

adAstra("#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|");
console.log("---------------");
adAstra("$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|");