function manOwar(array) {

    let pirateShip = array.shift().split(">").map(Number);
    let warShip = array.shift().split(">").map(Number);
    let maxHealth = Number(array.shift());

    let index = 0;
    let command = array[index]

    let countForRepair = 0;

    while (command !== "Retire") {

        let currentCommand = command.split(" ");
        let actionToTake = currentCommand[0];

        switch (actionToTake) {
            case "Fire":
                let indexOfEl = Number(currentCommand[1]);
                let damage = Number(currentCommand[2]);

                if (indexOfEl < 0 || indexOfEl > warShip.length) {
                    break;
                }

                let sectionHit = warShip[indexOfEl];

                if (sectionHit - damage <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                } else {
                    warShip.splice(indexOfEl, 1, sectionHit - damage);
                }

                break;
            case "Defend":
                let startIndex = Number(currentCommand[1]);
                let endIndex = Number(currentCommand[2]);
                let damageOnPirateship = Number(currentCommand[3]);

                if (startIndex < 0 || startIndex > pirateShip.length || endIndex < 0 || endIndex > pirateShip.length) {
                    break;
                }

                for (i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] = pirateShip[i] - damageOnPirateship;
                }

                for (let el of pirateShip) {
                    if (el <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }

                break;
            case "Repair":

                let indexToRepair = Number(currentCommand[1]);
                let health = Number(currentCommand[2]);

                if (indexToRepair < 0 || indexToRepair > pirateShip.length) {
                    break;
                }

                let sectionToRepair = pirateShip[indexToRepair];

                if (sectionToRepair + health > maxHealth) {
                    pirateShip.splice(indexToRepair, 1, maxHealth);
                } else {
                    pirateShip.splice(indexToRepair, 1, sectionToRepair + health);
                }

                break;
            case "Status":
                for (let section of pirateShip) {
                    if (section < maxHealth - (maxHealth * 0.8)) {
                        countForRepair++;
                    }
                }
                console.log(`${countForRepair} sections need repair.`);
                break;

        }
        index++;
        command = array[index];
    }

    let pirateShipSum = pirateShip.reduce((partialSum, a) => partialSum + a, 0);
    let warShipSum = warShip.reduce((partialSum, a) => partialSum + a, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}

// manOwar(["12>13>11>20>66",
    // "12>22>33>44>55>32>18",
    // "70",
    // "Fire 2 11",
    // "Fire 8 100",
    // "Defend 3 6 11",
    // "Defend 0 3 5",
    // "Repair 1 33",
    // "Status",
    // "Retire"]);

manOwar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);