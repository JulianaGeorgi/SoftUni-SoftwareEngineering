function demo() {

    let number = 6;

    if (number > 5) {
        if (number < 10) {
            if (number % 2 === 0) {
                console.log(number);
            }
        }
    }
}

demo();



function demo() {

    let number = 6;

    if (number > 5 && number < 10 && number % 2 === 0) { // логическо и - трябва абсолютно всичките булеви изрази да са тру, за да изпълни кода
        console.log(number);
    }
}

demo();



function demo() {

    let number = 6;

    if (number > 5 || number < 10) { // pipe symbol = or; ако едно връща тру, ще изпълни кода 
        console.log(number);
    }
}

demo();



if ((a >= 100 && b <= 200)|| (c + b) > 300 && c <=400); // по-добро изписване е с променливи!!