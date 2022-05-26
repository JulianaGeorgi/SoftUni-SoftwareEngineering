function sumSeconds(input) {

    let runnerOne = Number(input[0]);
    let runnerTwo = Number(input[1]);
    let runnerThree = Number(input[2]);

    let totalTime = runnerOne + runnerTwo + runnerThree;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`); // поставяме променливата, от която искаме да вземем стойност - доларче с къдрави скобки
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35","45","44"])