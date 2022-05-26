function repainting(input) {

let nylon = Number(input[0]);
let paint = Number(input[1]);
let thinner = Number(input[2]);
let hours = Number(input[3]);

let nylonPrice = (nylon + 2) * 1.5;
let paintPrice = ((paint * 0.10) + paint) *14.5;
let thinnerPrice = thinner * 5;

let finalSum = nylonPrice + paintPrice + thinnerPrice + 0.40;
let workersPay = finalSum * 0.30 * hours;
let finalExpense =finalSum + workersPay

console.log(finalExpense);
}

repainting(["10 ","11 ","4 ","8 "]);