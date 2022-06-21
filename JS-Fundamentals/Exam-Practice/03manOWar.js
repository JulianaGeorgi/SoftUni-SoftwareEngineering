// Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line, you will receive the status of the pirate ship, which is a string representing integer sections separated by ">". On the second line, you will receive the same type of status, but for the warship: 
// "{section1}>{section2}>{section3}… {sectionn}"
// On the third line, you will receive the maximum health capacity a section of the ship can reach. 
// The following lines represent commands until "Retire":
// •	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
// •	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
// "You lost! The pirate ship has sunken."
// •	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, skip the command. The health of the section cannot exceed the maximum health capacity.
// •	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. Print the following:
// "{count} sections need repair."
// In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
// "Pirate ship status: {pirateShipSum}
// Warship status: {warshipSum}"
// Input
// •	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>')
// •	On the 2nd line, you are going to receive the status of the warship
// •	On the 3rd line, you will receive the maximum health a section of a ship can reach.
// •	On the following lines, until "Retire", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The section numbers will be integers in the range [1….1000]
// •	The indexes will be integers [-200….200]
// •	The damage will be an integer in the range [1….1000]
// •	The health will be an integer in the range [1….1000]


function manOwar(array) {

    let pirateShip = array.shift().split(">").map(Number);
    let warShip = array.shift().split(">").map(Number);
    let maxHealth = Number(array.shift());

    let index = 0;
    let command = array[index];

    while (command !== "Retire") {

        let currentCommand = command.split(" ");
        let actionToTake = currentCommand.shift();

        switch (actionToTake) {
            case "Fire":

                let [indexOfEl, damage] = currentCommand.map(Number);

                if (indexOfEl < 0 || indexOfEl >= warShip.length) {
                    break;
                }

                let sectionHit = warShip[indexOfEl];

                if (sectionHit - damage <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                } else {
                    warShip.splice(indexOfEl, 1, sectionHit - damage);
                }
                break;

            case "Defend":

                let [startIndex, endIndex, damageOnPirateship] = currentCommand.map(Number);

                if (startIndex < 0 || startIndex >= pirateShip.length || endIndex < 0 || endIndex >= pirateShip.length) {
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

                let [indexToRepair, health] = currentCommand.map(Number);

                if (indexToRepair < 0 || indexToRepair >= pirateShip.length) {
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

                let breakPoint = maxHealth * 0.20;
                let result = pirateShip.filter(el => el < breakPoint)
                console.log(result.length + " sections need repair.")
                break;
        }
        index++;
        command = array[index];
    }

    let pirateShipSum = pirateShip.reduce((partialSum, a) => partialSum + a, 0);
    let warShipSum = warShip.reduce((partialSum, a) => partialSum + a, 0);

    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);
}

manOwar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

manOwar(["20>20>20>20>20>20",
    "20>20>20>20>20>20",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 5 4 11",
    "Repair 3 18",
    "Retire"]);