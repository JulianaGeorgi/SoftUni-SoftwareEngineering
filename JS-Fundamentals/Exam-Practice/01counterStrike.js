// Write a program that keeps track of every won battle against an enemy. You will receive initial energy. Afterward, you will start receiving the distance you need to reach an enemy until the "End of battle" command is given, or you run out of energy.
// The energy you need for reaching an enemy is equal to the distance you receive. Each time you reach an enemy, you win a battle, and your energy is reduced. Otherwise, if you don't have enough energy to reach an enemy, end the program and print: "Not enough energy! Game ends with {count} won battles and {energy} energy".
// Every third won battle increases your energy with the value of your current count of won battles.
// Upon receiving the "End of battle" command, print the count of won battles in the following format:
// "Won battles: {count}. Energy left: {energy}" 
// Input / Constraints
// •	On the first line, you will receive initial energy – an integer [1-10000].
// •	On the following lines, you will be receiving the distance of an enemy – an integer [1-10000]
// Output
// •	The description contains the proper output messages for each case and the format they should be printed.


function counterStrike(array) {

    let energy = Number(array.shift());
    let index = 0;
    let command = array[index];

    let distance = 0;
    let battlesCounter = 0;

    while (command !== "End of battle") {

        distance = Number(array[index]);

        if (distance > energy) {
            console.log(`Not enough energy! Game ends with ${battlesCounter} won battles and ${energy} energy`);
            return;
        }

        energy -= distance;
        battlesCounter++;

        if (battlesCounter % 3 == 0) {
            energy += battlesCounter;
        }

        index++;
        command = array[index];

    }

    if (energy >= 0) {
        console.log(`Won battles: ${battlesCounter}. Energy left: ${energy}`);
    }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);