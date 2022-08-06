function pirates(data) {

    let index = 0;
    let command = data[index];
    let citiesList = {};

    while (command !== "Sail") {
        let [city, population, gold] = command.split("||");

        if (citiesList[city]) {

            citiesList[city][0] += Number(population);
            citiesList[city][1] += Number(gold);

        } else if (!citiesList[city]) {
            citiesList[city] = [];
            citiesList[city].push(Number(population), Number(gold));
        }

        index++;
        command = data[index];
    }

    index++;
    command = data[index];

    while (command !== "End") {

        let [action, town, pam1, pam2] = command.split("=>");

        switch (action) {
            case "Plunder":
                let people = Number(pam1);
                let goldAmount = Number(pam2);

                console.log(`${town} plundered! ${goldAmount} gold stolen, ${people} citizens killed.`);

                citiesList[town][0] -= people;
                citiesList[town][1] -= goldAmount;

                if (citiesList[town][0] <= 0) {
                    
                    console.log(`${town} has been wiped off the map!`);
                    delete citiesList[town];
                } else if (citiesList[town][1] <= 0) {
                    
                    console.log(`${town} has been wiped off the map!`);
                    delete citiesList[town];
                }
                break;
            case "Prosper":
                let gold = Number(pam1);
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }

                citiesList[town][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesList[town][1]} gold.`);
                break;
        }

        index++;
        command = data[index];
    }

    let size = Object.keys(citiesList).length;

    if (size === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`);
        let cities = Object.entries(citiesList);
        for (let [city, data] of cities) {
            console.log(`${city} -> Population: ${data[0]} citizens, Gold: ${data[1]} kg`);
        }
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

console.log("--------------------------");

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);