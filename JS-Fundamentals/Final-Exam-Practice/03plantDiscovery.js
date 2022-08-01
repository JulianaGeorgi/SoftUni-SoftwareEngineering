function plantDiscovery(data) {

    let n = Number(data.shift());
    let plantList = {}; // parentObject that will hold the plants objects with their properties

    for (let i = 0; i < n; i++) {

        let [plant, rarity] = data.shift().split("<->");
        rarity = Number(rarity);

        plantList[plant] = { // creating the plant object
            rarity,
            ratings: [],
        };
    }

    let index = 0;
    let currentLine = data[index];

    while (currentLine !== "Exibition" && index < data.length) { // 2nd condition necessary as otherwise will come undefined 

        let [action, plant, value] = currentLine.split(": ")
            .join(" - ")
            .split(" - ");

        switch (action) {
            case "Rate":
                rating = Number(value);
                if (plantList.hasOwnProperty(plant)) {
                    plantList[plant]['ratings'].push(rating); // adding the rating to the array of ratings 
                } else {
                    console.log("error");
                }
                break;
            case "Reset":
                if (plantList.hasOwnProperty(plant)) {
                    plantList[plant]['ratings'] = []; // emptying the array of ratings 
                }else {
                    console.log("error");
                }
                break;
            case "Update":
                let newRarity = Number(value);
                if (plantList.hasOwnProperty(plant)) {
                    plantList[plant]['rarity'] = newRarity; // updating the rarity of the plant
                }else {
                    console.log("error");
                }
                break;
        }
        index++;
        currentLine = data[index];
    }


    console.log('Plants for the exhibition:');

    for (let plant in plantList) {
        let average = 0;
        if (plantList[plant]['ratings'].length !== 0) {
            let sum = plantList[plant]['ratings'].reduce((acc, num) => acc + num);
            average = sum / plantList[plant]['ratings'].length;
        }
        console.log(`- ${plant}; Rarity: ${plantList[plant]['rarity']}; Rating: ${average.toFixed(2)}`)
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
plantDiscovery(["2",
    "Candelabra<->10", "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);