class Car {
    brand: string;
    model: string; 
    horsePower: number; 

    constructor(brand: string, model: string, horsepower: number) {
        this.brand = brand; 
        this.model = model;
        this.horsePower = horsepower;
    }

    getDetails () : void {
        console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`)
    }
}

const car1 = new Car ("Chevrolet", "Impala", 390);
car1.getDetails();

const car2 = new Car ("Skoda", "Karoq", 150);
car2.getDetails();