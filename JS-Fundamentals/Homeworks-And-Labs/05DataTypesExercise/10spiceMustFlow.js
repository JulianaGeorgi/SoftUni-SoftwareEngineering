function spiceMustFlow(yield) {

    let yieldConsumption = 26;
    let yieldStored = 0;
    let yieldTotal = 0;
    let days = 0;

    while (yield >= 100) {
        days++;

        yieldStored = yield - yieldConsumption;
        yieldTotal += yieldStored;
        yield -= 10;
    
    }

    if (yield < 100) {

        if(yieldStored >= 26){
            yieldTotal -= yieldConsumption;
        } 
    }

    console.log(days);
    console.log(yieldTotal);
}

spiceMustFlow(111);