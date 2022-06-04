function dungeonestDark(array) {

    let roomArr = array[0].split('|');
    let health = 100;
    let coins = 0;
    let roomsCounter = 0;

    for (let i = 0; i < roomArr.length; i++) {
        let currentRoom = roomArr[i].split(" ");
        let command = currentRoom[0];
        let points = Number(currentRoom[1]);
        roomsCounter++;

        if (command === 'potion') {

            if(health + points> 100){

                points = 100 - health;
                health = 100;
                
            } else {
                health += points;
            }

    
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {

            coins += points;
            console.log(`You found ${points} coins.`);

        } else {

            health-= points;

            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCounter}`);
                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);