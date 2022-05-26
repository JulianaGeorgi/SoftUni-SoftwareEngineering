function accountBalance(input) {

    let index = 0;
    let account = 0;
    let command = input[index]; // когато може да получаваме или текст или числа; 
    index++;



    while (command !== "NoMoreMoney") {
        let money = Number(command); // обръщане къмн число, защото явно не е но мор мъни

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }

        account += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command = input[index];
        index++;
    }

    console.log("Total: " + account.toFixed(2));

}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);