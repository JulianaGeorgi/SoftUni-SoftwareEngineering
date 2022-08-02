function worldTour(input) {


    let travelStops = input.shift();
    let index = 0;
    let line = input[index];

    while (line !== "Travel") {
        let currentLine = line.split(":");
        let action = currentLine[0];

        switch (action) {
            case "Add Stop":
                let index = Number(currentLine[1]);
                let addStop = currentLine[2];
                if (index < travelStops.length && index >= 0) {
                    let firstPart = travelStops.substring(0, index);
                    let lastPart = travelStops.substring(index);
                    travelStops = firstPart + addStop + lastPart;
                    console.log(travelStops);
                } else {
                    console.log(travelStops);
                }
                break;
            case "Remove Stop":
                let startIndex = Number(currentLine[1]);
                let endIndex = Number(currentLine[2]);
                if (startIndex >= 0 && endIndex < travelStops.length) {
                    let removedStops = travelStops.substring(startIndex, endIndex + 1);
                    travelStops = travelStops.replace(removedStops, "");
                    console.log(travelStops);
                } else {
                    console.log(travelStops);
                }
                break;
            case "Switch":
                let oldStop = currentLine[1];
                let newStop = currentLine[2];
                let pattern = new RegExp(oldStop, "g")

                travelStops = travelStops.replace(pattern, newStop);
                console.log(travelStops);
                break;
        }

        index++;
        line = input[index];
    }

    console.log(`Ready for world tour! Planned stops: ${travelStops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

console.log("-------------------------");

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])