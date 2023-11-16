interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars: number;
    modelsSold: Record<string, T> = {};

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID as string] = model;
        this.soldCars++;
    }

    showDetails(): void {
        let message = `${this.dealershipName}:\n`;
        for (const [key, value] of Object.entries(this.modelsSold)) {
            message += `${key} sold ${value}\n`;
        }
        console.log(message);
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');

dealership.sellCar('BG02', 'S Class');

dealership.sellCar('BG03', 'ML Class');

dealership.sellCar('BG04', 'CLK Class');

console.log(dealership.showDetails());