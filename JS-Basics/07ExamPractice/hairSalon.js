function hairSalon(input) {

    let earingsTarget = Number(input[0]);
    let index = 1;
    let command = input[index];
    let price = 0;
    let earings = 0;

    while (command !== "closed" && index < input.length) {

        let serviceType = command;
        index++;

        if (serviceType === "haircut") {

            let customer = input[index];

            switch (customer) {
                case "mens":
                    price = 15;
                    break;
                case "ladies":
                    price = 20;
                    break;
                case "kids":
                    price = 10;
                    break;
            }
        } else if (serviceType === "color") {

            let colorProcedure = input[index];

            if (colorProcedure === "touch up") {
                price = 20;
            } else if (colorProcedure === "full color") {
                price = 30;
            }
        }

        earings += price;

        if (earings >= earingsTarget) {
            console.log("You have reached your target for the day!");
            console.log(`Earned money: ${earings}lv.`);
            return;
        }

        index++;
        command = input[index];
    }

    if (earings >= earingsTarget) {
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${earings}lv.`)

    } else {
        console.log(`Target not reached! You need ${(earingsTarget - earings)}lv. more.`);
        console.log(`Earned money: ${earings}lv.`);
    }
}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);