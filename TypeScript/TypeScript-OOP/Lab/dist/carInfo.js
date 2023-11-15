"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsepower;
    }
    getDetails() {
        console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`);
    }
}
const car1 = new Car("Chevrolet", "Impala", 390);
car1.getDetails();
const car2 = new Car("Skoda", "Karoq", 150);
car2.getDetails();
//# sourceMappingURL=carInfo.js.map