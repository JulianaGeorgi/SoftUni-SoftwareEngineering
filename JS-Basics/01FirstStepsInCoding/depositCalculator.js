function depositCalculator(input) {
let deposit = Number(input[0]);
let period = Number(input[1]);
let percent = Number(input[2]);
let sum = deposit + period * ((deposit * percent / 100)/12);// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

console.log(sum);
}

depositCalculator(["200", "3","5.7"]);