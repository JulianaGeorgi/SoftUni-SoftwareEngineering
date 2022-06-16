function carWash(commands) {

    let cleaningStatus = 0;

    for (i = 0; i < commands.length; i++) {

        let currentCommand = commands[i];

        switch (currentCommand) {
            case "soap":
                cleaningStatus+= 10;
                break;
            case "vacuum cleaner":
                cleaningStatus = cleaningStatus * 1.25;
                break;
            case "mud":
                cleaningStatus = cleaningStatus * 0.9;
                break;
            case "water":
                cleaningStatus = cleaningStatus * 1.2;
                break;
        }
    }
    console.log(`The car is ${cleaningStatus.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);