function jansNotation(arr) {

    let res = [];
    let numbers = [];
    let operators = [];

    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    for (let el of arr) {
        if (typeof (el) === "number") {
            numbers.push(el);
        } else {
            operators.push(el);
        }
    }

    if (operators.length < numbers.length - 1) { // we should get one operator less than the numbers we get
        console.log("Error: too many operands!");
        return;
    } else if (numbers.length === operators.length || numbers.length === 0) {
        console.log("Error: not enough operands!");
        return;
    }

    for (let el of arr) {
        if (typeof (el) === "number") {
            res.push(el);
            continue;
        }
        let numA = res.pop();
        let numB = res.pop();
        let result = operationEnum[el](numB, numA); // извиквам обекта, подавам му ключа и казвам да извика функцията с числата
        res.push(result);
    }
    console.log(res.join(" "));
}

jansNotation([3,
    4,
    '+']);

jansNotation([5,
    3,
    4,
    '*',
    '-']);

jansNotation([7,
    33,
    8,
    '-']);