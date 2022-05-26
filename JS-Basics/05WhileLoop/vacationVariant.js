function vacation(input) {
    let days = 0;
    let spendDay = 0;
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    while (true) {
        if (currentMoney >= neededMoney) {
            console.log(`You saved the money for ${days} days.`);
            break;

        }
        if (input[index] === 'save') {
            currentMoney += Number(input[index + 1]);
            index++;
            days++;
            spendDay = 0;

        }
        else if (input[index] === 'spend') {
            if (currentMoney < Number(input[index + 1])) {
                currentMoney = 0;
            }
            else {
                currentMoney = currentMoney - Number(input[index + 1]);
            }
            days++;
            spendDay++;
            index++;
        }

        if (spendDay === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
        index++;
    }

}

vacation((["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]))