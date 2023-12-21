import { Drink } from "./drink";

export class VendingMachine {
    buttonCapacity: number;
    drinks: Drink[];
    getCount: number;

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = this.drinks.length;
    }

    // getCountTest(): number {
    //     return this.drinks.length;
    // }

    addDrink(drink: Drink): void {
        if (this.getCount < this.buttonCapacity) {
            this.drinks.push(drink);
        } else {
            console.log("Full capacity.");
        }
        this.getCount = this.drinks.length;
    }

    removeDrink(drinkToRemove: string): boolean {
        if (!this.drinks.some(drink => drink.name === drinkToRemove)) {
            return false;
        } else {
            this.drinks = this.drinks.filter(drink => drink.name != drinkToRemove);
            this.getCount = this.drinks.length;
            return true;
        }
    }

    getLongest() {
        const longestValue: number = Math.max(...this.drinks.map(drink => drink.volume));
        const longestDrink = this.drinks.filter(drink => drink.volume === longestValue);
        return longestDrink.toString();
    }

    getCheapest() {
        const cheapestValue: number = Math.min(...this.drinks.map(drink => drink.price));
        const cheapestDrink = this.drinks.filter(drink => drink.price === cheapestValue);
        return cheapestDrink.toString();
    }

    buyDrink(name: string) {
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