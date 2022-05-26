function trainTheTrainers(input){


    let judgesCount = Number(input[0]);
    let index = 1;
    let command = input[index]; 
    let sumGrades = 0;
    let counter = 0; // за броя на темите

    while(command !== "Finish"){

        counter++;
        let name = command;
        let tempSumGrade = 0; // за отделните теми

        for(let votes = 0; votes < judgesCount; votes++){
            index++;
            let grade = Number(input[index]);
            tempSumGrade+=grade;
        }

        let tempsAvgGrade = tempSumGrade / judgesCount;
        sumGrades+=tempsAvgGrade;

        console.log(`${name} - ${tempsAvgGrade.toFixed(2)}.`);

        index++;
        command = input[index];
    }

    let avgGrade = sumGrades / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);