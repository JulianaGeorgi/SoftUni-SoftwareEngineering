function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10; // с по 10 отгоре на предишната сума

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney; // променлива, която всеки следващ път повишава своята стойност и я добавяме към нормалната сума
            stolenMoney++;
            addedMoney += 10; 
        } else {
            toysCounter++;
        }
    }

    let totalMoneyFromToys = toysCounter * singleToyPrice;
    let totalSavedMoney = (savedMoney + totalMoneyFromToys - stolenMoney);

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]) 