function movieDay(input) {

    shootingTime = Number(input[0]);
    scenesNumber = Number(input[1]);
    singleSceneTime = Number(input[2]);

    let fieldPreparationTime = shootingTime * 0.15;
    let totalShootingTime = scenesNumber * singleSceneTime;
    let totalTime = totalShootingTime + fieldPreparationTime;

    if (totalTime <= shootingTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(shootingTime - totalTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${totalTime - shootingTime} minutes.`);
    }
}

movieDay(["120", "10", "11"]);