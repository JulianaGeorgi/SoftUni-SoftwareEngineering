function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let totalMoney = 0;
    let day = 0;
    let dayOfFirstPurchase = 0;
    let alreadyBought = false;

    let bitcoinCount = 0;

    for (let i = 0; i < input.length;i++) {
        let goldMinedPerDay = input[i];

        day++;

        if(day % 3 === 0){
            goldMinedPerDay *= 0.7;
        }

        totalMoney += (goldMinedPerDay * goldPrice);

        if(totalMoney >= bitcoinPrice){

            if(alreadyBought === false){
                dayOfFirstPurchase = day;
            }

            alreadyBought = true;
            
            let numberOfBtcAllowedToBuy = parseInt(totalMoney / bitcoinPrice);

            bitcoinCount += numberOfBtcAllowedToBuy;
            totalMoney = totalMoney - (numberOfBtcAllowedToBuy * bitcoinPrice);
        }
    }

    if(bitcoinCount >= 1) {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);  
    } else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);