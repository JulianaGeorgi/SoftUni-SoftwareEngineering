function printAndSum(startNum, endNum){

    let sum = 0;
    let printLine = ''; // за да добавяме числата и спейс 

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        sum+= currentNum;
        printLine+= `${currentNum} `;
        
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);

}

printAndSum(5,10);