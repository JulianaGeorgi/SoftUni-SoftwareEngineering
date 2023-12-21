function printAndSum(startNum: number, endNum: number) {

    let sum: number = startNum;
    let resultString: string = `${startNum}`;

    for (let i = startNum + 1; i <= endNum; i++) {
        sum += i;
        resultString += `${i}`;
    }

    console.log(`${resultString}\n Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);