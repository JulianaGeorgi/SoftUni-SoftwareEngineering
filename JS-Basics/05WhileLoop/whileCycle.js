function demo() {

    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

    let i = 1; // хардкодната стойност / избягваме го, а ако имаме се инзасят в константи; за 1 и 0 става горе-долу :D
    while (i <= 10) { // само условието; инициализирането и стъпката са отделно
        console.log(i);
        i++;
    }

    while (true) { // не е добра практика

        if (i > 10) {
            break; // прекъсва токущия блок от код - тялото на while; не може да прекъсне функция - отнася се за нещо, което има итерации
        }
        console.log(i);
        i++;
    }


}

demo()


function demo(input) {

    let num = 1;
    while (num <= 5) { // поставяме булев израз, който ако е истина, влизаме в него 
        console.log(num);
        num++; //  условието
    }

    for (let i = 1; i < 5; i++) { // тук порменливата е само в тялото на цикъла, не е глобална
        console.log(i);
    }


}

demo();