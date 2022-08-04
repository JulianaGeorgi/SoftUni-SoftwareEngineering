function needForSpeed(data) {

    let numOfCars = Number(data.shift());
    let carList = {}; // object where we put the cars as keys and the mileage and fuel in an array (they are the values)

    for (let i = 0; i < numOfCars; i++) { // getting the cars we are gonna have

        let [car, mileage, fuel] = data[i].split("|");

        if (!carList[car]) {
            carList[car] = []; // car is the key
            carList[car].push(Number(mileage), Number(fuel)); // in the car array we push the car mileage and fuel
        }

    }

    for (let i = numOfCars; i < data.length; i++) { // looping through each line of the array with commands
        let [command, carModel, carMileage, carFuel] = data[i].split(" : "); // getting the info from each line

        switch (command) {
            case "Drive":
                distanceToDrive = Number(carMileage);
                carFuel = Number(carFuel);
                if (carList[carModel][1] < carFuel) { // acessing the object with all cars and checking if this given car has enough fuel 
                    //-> accessing the key "car" and with [1] the position of the fuel in the array
                    console.log("Not enough fuel to make that ride");
                } else if (carList[carModel][1] > carFuel) {
                    carList[carModel][0] += distanceToDrive;
                    carList[carModel][1] -= carFuel;
                    console.log(`${carModel} driven for ${distanceToDrive} kilometers. ${carFuel} liters of fuel consumed.`)
                }

                if (carList[carModel][0] > 100000) {
                    delete carList[carModel];
                    console.log(`Time to sell the ${carModel}!`);
                }
                break;
            case "Refuel":
                let toRefuel = Number(carMileage);
                carList[carModel][1] += toRefuel;
                if (carList[carModel][1] >= 75) {
                    toRefuel = carList[carModel][1] - 75 - toRefuel;
                    carList[carModel][1] = 75;
                }
                console.log(`${carModel} refueled with ${Math.abs(toRefuel)} liters`);
                break;
            case "Revert":
                kilometers = Number(carMileage);
                carList[carModel][0] -= kilometers;
                if (carList[carModel][0] < 10000) {
                    carList[carModel][0] = 10000;
                } else {
                    console.log(`${carModel} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
    }

    let cars = Object.entries(carList);
    for (const [car, km] of cars) {
        console.log(`${car} -> Mileage: ${km[0]} kms, Fuel in the tank: ${km[1]} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

console.log("----------------------");

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);