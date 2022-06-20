function treasureHunt(array) {

    let chest = array.shift().split("|");
    
    let index = 0;
    let command = array[index];
    index++;

    while (command !== "Yohoho!") {

        let tokens = command.split(" ");
        let currentCommand = tokens.shift();

        switch (currentCommand) {
            case "Loot":
                for (let i = 0; i < tokens.length; i++) {
                    if (!chest.includes(tokens[i])) {
                        chest.unshift(tokens[i]);
                    }
                }
                break;

            case "Drop":
                let indexOfEl = Number(tokens[0]);
                if (indexOfEl < 0 || indexOfEl > chest.length) {
                    break;
                }
                let element = chest.splice(indexOfEl, 1);
                chest.push(element[0]);
                break;

            case "Steal":
                let elementsToRemove = Number(tokens[0]);
                let items = chest.splice(-elementsToRemove);
                console.log(items.join(", "));
                break;
        }

        command = array[index];
        index++;
    }

    if (chest.length > 0) {

        let sum = 0;
        for (let el of chest) {
            sum += el.length;
        }

        let average = sum / chest.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

// treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]));

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);