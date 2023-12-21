"use strict";
function cityTaxes(name, population, treasury) {
    const newCity = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
        applyRecession(percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
    };
    return newCity;
}
// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//# sourceMappingURL=cityTaxes.js.map