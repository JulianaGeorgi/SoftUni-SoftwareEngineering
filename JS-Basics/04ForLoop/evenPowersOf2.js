function evenPowersOf2(input) {

    let n = Number(input[0]);
    for (let i = 0; i <= n; i += 2) { // промени стойността на i като добавяме 2
        let result = Math.pow(2,i); // тази променлива ще се създаде за всяка стъпка, не пази стейт
        console.log(result);
    }
}

evenPowersOf2();