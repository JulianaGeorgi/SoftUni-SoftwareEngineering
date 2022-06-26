function theBiscuitFactory(array) {

    let perDay = Number(array[0]);
    let workers = Number(array[1]);
    let competitionTotal = Number(array[2]);

    let dailyProduction = perDay * workers;

    let totalBiscuits = 0;
    let difference = 0;
    let percentage = 0;

    for (i = 1; i <= 30; i++) {

        if (i % 3 === 0) {
            totalBiscuits += Math.floor(dailyProduction * 0.75);

        } else {
            totalBiscuits += dailyProduction;
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

    if (competitionTotal > totalBiscuits) {
        difference = competitionTotal - totalBiscuits;
        percentage = difference / competitionTotal * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }

    if (competitionTotal < totalBiscuits) {
        difference = totalBiscuits - competitionTotal;
        percentage = difference / competitionTotal * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }
}

theBiscuitFactory(["78", "8", "16000"]);
theBiscuitFactory(["65", "12", "26000"]);
theBiscuitFactory(["163", "16", "67020"]);