function counterStrike(array) {

    let energy = Number(array.shift());
    let index = 0;
    let command = array[index];
    
    let distance = 0;
    let battlesCounter = 0;

    while (command !== "End of battle") {

        distance = Number(array[index]);

        if (distance > energy) {
            console.log(`Not enough energy! Game ends with ${battlesCounter} won battles and ${energy} energy.`);
            return;
        }

        energy -= distance;
        battlesCounter++;

        if (battlesCounter % 3 === 0) {
            energy += battlesCounter;
        }

        index++;
        command = array[index];

    }

    console.log(`Won battles: ${battlesCounter}. Energy left: ${energy}`);
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);