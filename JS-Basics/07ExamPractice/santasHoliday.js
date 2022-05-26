function santasHoliday(input) {

    let daysToStay = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];
    let roomPrice = 0;
    let stayPrice = 0;
    let finalPrice = 0;

    switch (roomType) {
        case "room for one person":
            roomPrice = 18;
            stayPrice = (daysToStay - 1) * roomPrice;
            finalPrice = stayPrice;
            break;
        case "apartment":
            roomPrice = 25;
            stayPrice = (daysToStay - 1) * roomPrice;

            if (daysToStay < 10) {
                finalPrice = stayPrice - (stayPrice * 0.3);
            } else if (daysToStay < 15) {
                finalPrice = stayPrice - (stayPrice * 0.35);
            } else if (daysToStay > 15) {
                finalPrice = stayPrice - (stayPrice * 0.5);
            }
            break;
        case "president apartment":
            roomPrice = 35;

            stayPrice = (daysToStay - 1) * roomPrice;

            if (daysToStay < 10) {
                finalPrice = stayPrice - (stayPrice * 0.1);
            } else if (daysToStay < 15) {
                finalPrice = stayPrice - (stayPrice * 0.15);
            } else if (daysToStay > 15) {
                finalPrice = stayPrice - (stayPrice * 0.2);
            }
            break;
    }

    if (feedback === "positive") {
        console.log((finalPrice + (finalPrice * 0.25)).toFixed(2));
    } else if (feedback === "negative") {
        console.log((finalPrice - (finalPrice * 0.1)).toFixed(2));
    }
}

santasHoliday(["12","room for one person", "positive"]);