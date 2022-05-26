function demo() {

    let number = 6;

    if (number <= 10) { // ако първата не се изпълни, не отива към по-вътрещните; по-добре първо да се направи основният скелет и после да вкарваме допълнителните условия
        
        if (number % 2 === 0) { // добре е да не са повече от три проверки, защото е трудно за дебъгване
            console.log("Number is even and <=10");
        } else {
            console.log("Number is odd and <=10");
        }

        
    } else if (number <= 15) {
        
        if (number % 2 === 0) {
            console.log("Number is even and <=15");
        } else {
            console.log("Number is odd and <=15");
        }
    }
}

demo();