interface City {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes(): void,
    applyGrowth(percentage: number): void,
    applyRecession(percentage: number): void,
}

function cityTaxes(name: string, population: number, treasury: number): City {

    const newCity: City = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage: number) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
        applyRecession(percentage: number) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
    }
    return newCity;
}



// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);