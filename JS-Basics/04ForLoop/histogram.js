function histogram(input) {

    let numbersCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= numbersCount; index++) { // с индекса казваме откъде в масива искаме да започнем да броим (нулевото място не ни трябва, следователно искаме да започнем от първото)
        let currentNumber = Number(input[index]); // искам от масива да изкараш елемента, който седи на дадения индекс

        if (currentNumber < 200) {
            p1++; // брояч!!! всеки път като влиза тук увеличава с едно и го помни; ако влезе пак - добавя към предишния номер 1
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if(currentNumber <= 799){
            p4++;
        } else if(currentNumber >= 800){
            p5++;
        }
        console.log(input[index]); // изкарваме числата от масива

    }

    // p1 = 12 / 20 * 100 = 60.00%

    console.log(`${(p1/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p2/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p3/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p4/numbersCount*100).toFixed(2)}%`);
    console.log(`${(p5/numbersCount*100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
