// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines: 
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"
// Input / Constraints
// You receive a string representing the dungeon's rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages described above.


function muOnline(dungeonRooms) {

    let rooms = dungeonRooms.split("|");
    let index = 0;
    let currentRoom = rooms[index];

    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;

    while (health > 0 && index <= rooms.length - 1) {

        roomCount++;

        currentRoom = currentRoom.split(" ");
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);

        switch (command) {
            
            case "potion":
                let newHealth = (health + num > 100) ? 100 : health + num; // if health is over 100 -> return 100; otherwise sum current health with num
                console.log(`You healed for ${newHealth - health} hp.`); 
                health = newHealth;
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                bitcoins += num;
                console.log(`You found ${num} bitcoins.`);
                break;

            default: 
                health -= num; 
                if(health <= 0){
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }

        index++;
        currentRoom = rooms[index];
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");