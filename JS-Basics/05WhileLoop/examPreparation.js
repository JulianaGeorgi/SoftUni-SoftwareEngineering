function examPreparation(input) {


    let badGradesLimit = input[0];
    let index = 1;

    let badGrade = 0;
    let grade = 0;
    needsABreak = false;

    let gradesSum = 0;
    let gradesCount= 0;

    while (input[index] !== "Enough") {
       
 
        taskName = input[index];
        index++;

   
        grade = Number(input[index]);
        index++;

        gradesSum+= grade;
        gradesCount++;

        if (grade <= 4) {
            badGrade++
            if (badGrade >= badGradesLimit) {
                needsABreak = true;
                console.log(`You need a break, ${badGrade} poor grades.`)
                break;
            }
            continue;
        }


    }

    if (needsABreak === false) {
        console.log(`Average score: ${(gradesSum/gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${taskName}`);
    }
}
examPreparation(["3", "Money", "5", "Story", "2", "Spring Time", "4", "Bus", "6", "Enough"]);