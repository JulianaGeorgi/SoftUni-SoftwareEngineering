function mandatoryLit(input) {
let bookPages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let neededData = Number(input[2]);
let timeForReading = bookPages / pagesPerHour;
let finalResult = timeForReading / neededData;
console.log(finalResult);

}
mandatoryLit(["212", "20", "2"]);