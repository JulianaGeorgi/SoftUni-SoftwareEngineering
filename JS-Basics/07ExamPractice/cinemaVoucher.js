function cinemaVoucher(input) {

    let voucherValue = Number(input[0]);
    let index = 1;
    let command = input[index];
    price = 0;
    moneySpent = 0;

    movies = 0;
    other = 0;

    while (command !== "End") {

        if (command.length > 8) {
            price = command.charCodeAt(0) + command.charCodeAt(1);
            moneySpent += price;

            if (moneySpent <= voucherValue) {
                movies++;
            }


        } else if (command.length <= 8) {
            price = command.charCodeAt(0);
            moneySpent += price;

            if (moneySpent <= voucherValue) {
                other++;
            }

        }

        if (moneySpent >= voucherValue) {
            console.log(movies);
            console.log(other);
            break;
        }


        index++;
        command = input[index];

    }

    if (command === "End") {
        console.log(movies);
        console.log(other);
    }
}


cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"]);