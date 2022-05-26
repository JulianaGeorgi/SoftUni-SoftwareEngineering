function petShop(input) {

    let dogFoodPrice = Number(input[0]) * 2.5;
    let catFoodPrice = Number(input[1]) * 4;

    let allFood = dogFoodPrice + catFoodPrice;
    console.log(allFood);
}
petShop(["5 ","4 "]);