function toyShop(input){

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let moneyFromPuzzles = puzzleCount * 2.60;
    let moneyFromDolls = dollsCount * 3;
    let moneyFromBears = bearsCount * 4.10;
    let moneyFromMinions = minionsCount * 8.20;
    let moneyFromTrucks = trucksCount * 2;

    let moneyFromAllToys = moneyFromPuzzles + moneyFromDolls + moneyFromBears + moneyFromMinions + moneyFromTrucks;
    let allToysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(allToysCount >= 50){
        moneyFromAllToys = moneyFromAllToys * 0.75; // 25% discount - multiply by 0.75
    }

    let moneyAfterRent = moneyFromAllToys * 0.9; // 10% discount - multiply by 0.9

    if (moneyAfterRent >= tripPrice){
console.log(`Yes! ${(moneyAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyAfterRent).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8","20","25","30","50","10"])