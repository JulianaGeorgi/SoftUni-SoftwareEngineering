// Create a program that manages the state of the treasure chest along the way. On the first line, you will receive the initial loot of the treasure chest, which is a string of items separated by a "|".
// "{loot1}|{loot2}|{loot3} … {lootn}"
// The following lines represent commands until "Yohoho!" which ends the treasure hunt:
// •	"Loot {item1} {item2}…{itemn}":
// o	Pick up treasure loot along the way. Insert the items at the beginning of the chest. 
// o	If an item is already contained, don't insert it.
// •	"Drop {index}":
// o	Remove the loot at the given position and add it at the end of the treasure chest. 
// o	If the index is invalid, skip the command.
// •	"Steal {count}":
// o	Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
// o	Print the stolen items separated by ", ":
// "{item1}, {item2}, {item3} … {itemn}"
// In the end, output the average treasure gain, which is the sum of all treasure items length divided by the count of all items inside the chest formatted to the second decimal point:
// "Average treasure gain: {averageGain} pirate credits."
// If the chest is empty, print the following message:
// "Failed treasure hunt."
// Input
// •	On the 1st line, you are going to receive the initial treasure chest (loot separated by "|")
// •	On the following lines, until "Yohoho!", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The loot items will be strings containing any ASCII code.
// •	The indexes will be integers in the range [-200…200]
// •	The count will be an integer in the range [1….100]



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