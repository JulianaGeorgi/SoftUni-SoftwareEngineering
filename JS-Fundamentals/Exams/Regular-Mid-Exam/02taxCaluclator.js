function taxCalculator(array) {

    let cars = array.shift().split(">>");
    let index = 0;
    let currentCar = cars[index];

    let tax = 0;
    let taxToPay = 0;
    let kilometersExtra = 0;
    let totalToCollect = 0;


    while (index <= cars.length - 1) {

        currentCar = currentCar.split(" ");
        let carType = currentCar[0];
        let years = Number(currentCar[1]);
        let kilometers = Number(currentCar[2]);

        switch (carType) {
            case "family":
                tax = 50;
                tax = tax - years * 5;
                kilometersExtra = Math.trunc(kilometers / 3000) * 12;
                taxToPay = tax + kilometersExtra;
                totalToCollect += taxToPay;
                console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;
            case "heavyDuty":
                tax = 80;
                tax = tax - years * 8;
                kilometersExtra = Math.trunc(kilometers / 9000) * 14;
                taxToPay = tax + kilometersExtra;
                totalToCollect += taxToPay;
                console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;
            case "sports":
                tax = 100;
                tax = tax - years * 9;
                kilometersExtra = Math.trunc(kilometers / 2000) * 18;
                taxToPay = tax + kilometersExtra;
                totalToCollect += taxToPay;
                console.log(`A ${carType} car will pay ${taxToPay.toFixed(2)} euros in taxes.`);
                break;
            default:
                console.log("Invalid car type.");
                break;
        }

        index++;
        currentCar = cars[index];
    }

    console.log(`The National Revenue Agency will collect ${totalToCollect.toFixed(2)} euros in taxes.`);
}

taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);