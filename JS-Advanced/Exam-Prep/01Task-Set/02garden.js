class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw Error("Not enough space in the garden.");
        }
        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!currentPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (currentPlant.ripe) {
            throw Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw Error("The quantity cannot be zero or negative.");
        }
        currentPlant.ripe = true;
        currentPlant.quantity = quantity;

        let returnMessage = quantity === 1 ?
            `${quantity} ${plantName} has successfully ripened.` :
            `${quantity} ${plantName}s have successfully ripened.`
        return returnMessage;
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!currentPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if (!currentPlant.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(plant => plant.plantName !== plantName);
        this.storage.push({
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity
        });
        this.spaceAvailable += currentPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let buff = "";
        buff += `The garden has ${this.spaceAvailable} free space left.\n`;
        buff += "Plants in the garden: ";
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)) // sorting the array of objects
            .forEach(plant => buff += `${plant.plantName}, `);
        buff = buff.substring(0, buff.length - 2); // to remove the last coma and space
        buff += `\n`;
        if (!this.storage.length) { // if empty
            buff += "Plants in storage: The storage is empty.";
        } else {
            buff += `Plants in storage: `;
            this.storage.forEach(plant => buff += `${plant.plantName} (${plant.quantity}), `);
        }
        buff = buff.substring(0, buff.length - 2);
        return buff;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));
console.log(myGarden.generateReport());