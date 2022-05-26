function exam(input) {

    let studentsTotal = Number(input[0]);
    let twoGrades = 0;
    let threeGrades = 0;
    let fourGrades = 0;
    let fiveToSixGrades = 0;
    let gradesSum = 0;

    for (let index = 1; index < input.length; index++) {

        let grade = Number(input[index]);

        if (grade >= 5) {
            fiveToSixGrades++;
        } else if (grade >= 4 && grade <= 4.99) {
            fourGrades++;
        } else if (grade >= 3 && grade <= 3.99) {
            threeGrades++;
        } else if (grade <= 3) {
            twoGrades++;
        }

        gradesSum+=grade;
    
    }

    console.log(`Top students: ${((fiveToSixGrades / studentsTotal) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((fourGrades / studentsTotal) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((threeGrades / studentsTotal) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((twoGrades / studentsTotal) * 100).toFixed(2)}%`);
    console.log(`Average: ${(gradesSum / studentsTotal).toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);