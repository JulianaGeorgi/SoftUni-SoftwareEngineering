function braceletStand(input){

    let pocketMoneyPerDay = Number(input[0]);
    let moneyEarnedPerDay = Number(input[1]);
    let spendingsTotal = Number(input[2]);
    let giftPrice = Number(input[3]);

    let pocketMoneyTotal = pocketMoneyPerDay * 5;
    let earnedMoneyTotal = moneyEarnedPerDay * 5;
    let savingsTotal = pocketMoneyTotal + earnedMoneyTotal;
    let moneyAvail = savingsTotal - spendingsTotal;

    if(moneyAvail >= giftPrice){
        console.log(`Profit: ${(moneyAvail).toFixed(2)} BGN, the gift has been purchased.`);
    } else{
        console.log(`Insufficient money: ${(giftPrice - moneyAvail).toFixed(2)} BGN.`);
    }
}

braceletStand(["5.12","32.05","15","150"]);