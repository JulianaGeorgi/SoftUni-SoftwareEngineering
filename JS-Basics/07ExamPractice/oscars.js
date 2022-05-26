function oscars(input) {

    let filmName = input[0];
    let roomType = input[1];
    let ticketsSold = input[2];
    let earnings = 0;

    switch (filmName) {
        case "A Star Is Born":
            if (roomType === "normal") {
                earnings = ticketsSold * 7.50;
            } else if (roomType === "luxury") {
                earnings = ticketsSold * 10.50;
            } else if (roomType === "ultra luxury") {
                earnings = ticketsSold * 13.50;
            }
            console.log(`${filmName} -> ${earnings.toFixed(2)} lv.`);
            break;
        case "Bohemian Rhapsody":
            if (roomType === "normal") {
                earnings = ticketsSold * 7.35;
            } else if (roomType === "luxury") {
                earnings = ticketsSold * 9.45;
            } else if (roomType === "ultra luxury") {
                earnings = ticketsSold * 12.75;
            }
            console.log(`${filmName} -> ${earnings.toFixed(2)} lv.`);
            break;
        case "Green Book":
            if (roomType === "normal") {
                earnings = ticketsSold * 8.15;
            } else if (roomType === "luxury") {
                earnings = ticketsSold * 10.25;
            } else if (roomType === "ultra luxury") {
                earnings = ticketsSold * 13.25;
            }
            console.log(`${filmName} -> ${earnings.toFixed(2)} lv.`);
            break;
        case "The Favourite":
            if (roomType === "normal") {
                earnings = ticketsSold * 8.75;
            } else if (roomType === "luxury") {
                earnings = ticketsSold * 11.55;
            } else if (roomType === "ultra luxury") {
                earnings = ticketsSold * 13.95;
            }
            console.log(`${filmName} -> ${earnings.toFixed(2)} lv.`);
            break;

    }
}

//"{име на филма} -> {приходи от прожекцията на филма} lv."

oscars(["Green Book", "normal", "63"]);