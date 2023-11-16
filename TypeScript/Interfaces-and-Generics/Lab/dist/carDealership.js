"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.modelsSold = {};
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
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
//# sourceMappingURL=carDealership.js.map