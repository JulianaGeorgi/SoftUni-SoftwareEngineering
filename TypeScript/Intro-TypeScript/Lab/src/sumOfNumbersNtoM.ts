function sumOfNumbersNtoM(N: string, M: string): number {
    const numN = Number(N);
    const numM = Number(M);
    let sum: number = 0;

    for (let i = numN; i <= numM; i++) {
       sum+= i;
    }

    return sum;
}

console.log(sumOfNumbersNtoM('1', '5'));
console.log(sumOfNumbersNtoM('-8', '20'));