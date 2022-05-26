function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = input[2];
    let boatRentPrice = 0;

    switch (season) {
        case "Spring":
            boatRentPrice = 3000;
            break;

        case "Summer":

        case "Autumn":
            boatRentPrice = 4200;
            break;

        case "Winter":
            boatRentPrice = 2600;
            break;
    }

    if (fisherman <= 6) {
        boatRentPrice = boatRentPrice * 0.9;
    } else if (fisherman >= 7 && fisherman <= 11) {
        boatRentPrice = boatRentPrice * 0.85;
    } else if (fisherman >= 12) {
        boatRentPrice = boatRentPrice * 0.75;
    }

    if (fisherman % 2 === 0 && season !== "Autumn") {
        boatRentPrice = boatRentPrice * 0.95;
    }

    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000", "Summer", "11"]);