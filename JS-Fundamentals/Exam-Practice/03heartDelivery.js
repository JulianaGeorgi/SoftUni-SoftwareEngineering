function heartDelivery(array){

    let neighborhood = array.shift().split("@").map(Number);
    let command = array.shift();
    let indexOfHouse = 0;

    while(command !== "Love!"){
        let jumpWithLength = command.split(" ");
        indexOfHouse += Number(jumpWithLength[1]);

        if(indexOfHouse > neighborhood.length -1 ){
            indexOfHouse = 0;
        }

        if(neighborhood[indexOfHouse] === 0){
            console.log(`Place ${indexOfHouse} already had Valentine's day.`);
        } else {
            neighborhood[indexOfHouse] = neighborhood[indexOfHouse] - 2;
            if(neighborhood[indexOfHouse]=== 0){
                console.log(`Place ${indexOfHouse} has Valentine's day.`);
            }
        }

        command = array.shift();
    }

    console.log(`Cupid's last position was ${indexOfHouse}.`);
    let resultArr = [];
    let missionSuccessful = true;

    neighborhood.forEach(element => {
        if(element !== 0){
            missionSuccessful = false;
            resultArr.push(element);
        }
    });

    if(missionSuccessful){
        console.log("Mission was successful.");
        
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`)
    }

}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);