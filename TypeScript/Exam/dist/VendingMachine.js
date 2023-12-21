"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = this.drinks.length;
    }
    // getCountTest(): number {
    //     return this.drinks.length;
    // }
    addDrink(drink) {
        if (this.getCount < this.buttonCapacity) {
            this.drinks.push(drink);
        }
        else {
            console.log("Full capacity.");
        }
        this.getCount = this.drinks.length;
    }
    removeDrink(drinkToRemove) {
        if (!this.drinks.some(drink => drink.name === drinkToRemove)) {
            return false;
        }
        else {
            this.drinks = this.drinks.filter(drink => drink.name != drinkToRemove);
            this.getCount = this.drinks.length;
            return true;
        }
    }
    getLongest() {
        const longestValue = Math.max(...this.drinks.map(drink => drink.volume));
        const longestDrink = this.drinks.filter(drink => drink.volume === longestValue);
        return longestDrink.toString();
    }
    getCheapest() {
        const cheapestValue = Math.min(...this.drinks.map(drink => drink.price));
        const cheapestDrink = this.drinks.filter(drink => drink.price === cheapestValue);
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const selectedDrink = this.drinks.filter(drink => drink.name === name);
        return selectedDrink.toString();
    }
    report() {
        if (this.getCount === 0) {
            return "No drinks available.";
        }
        const drinksInfo = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${drinksInfo}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=vendingMachine.js.map