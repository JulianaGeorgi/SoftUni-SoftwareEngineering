function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let badGrade = 0; //лоши оценки
    let sumGrade = 0; 
    let i = 1; // за да брои класа 
    let isExcluded = false; // Boolean flag

    while (i <= 12) { 
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrade++;

            if (badGrade > 1) {
                isExcluded = true;
                break; // ще прекъсне целия while цикъл
            }
            continue; // ако има само една лоша оценка и не е прекъснал горе
        }

        sumGrade += grade; 
        i++; // класовете

    }

    if (!isExcluded) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${i} grade`); // може и да е горе преди брейка след isExcluded
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);