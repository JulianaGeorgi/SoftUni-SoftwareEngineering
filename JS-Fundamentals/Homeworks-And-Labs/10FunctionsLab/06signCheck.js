function signCheck(num1, num2, num3) {

    let arrayFromNumbers = [num1, num2, num3];
    let negative = 0;

    for (let el of arrayFromNumbers) {
        if (el < 0) {
            negative++;
        }
    }

    if (negative % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
