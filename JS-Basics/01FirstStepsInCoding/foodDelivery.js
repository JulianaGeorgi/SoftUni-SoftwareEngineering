function foodDelivery(input) {
    let chickenMenus = Number(input[0])
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let veggieMenusPrice = veggieMenus * 8.15;

    let menusSum = chickenMenusPrice + fishMenusPrice + veggieMenusPrice;

    let dessertPrice = menusSum * 0.20;

    let finalPriceOfAll = menusSum + dessertPrice + 2.50;
    console.log(finalPriceOfAll);

}
foodDelivery(["2 ","4 ","3 "]);