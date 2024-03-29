function worldTour(data) {

    let initialString = data.shift();
    let line = data.shift();

    while (line !== "Travel") {

        let [action, firstParam, lastParam] = line.split(":");
        let startIndex;
        let endIndex;

        switch (action) {
            case "Add Stop":
                initialString = addStop(firstParam, lastParam, initialString);
                console.log(initialString);
                break;
            case "Remove Stop":
                initialString = removeStop(firstParam, lastParam, initialString);
                console.log(initialString);
                break;
            case "Switch":

            initialString = switchValue(firstParam, lastParam, initialString);

                console.log(initialString);
                break;

        }

        line = data.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${initialString}`);

    function addStop(index, value, initialString) {
        startIndex = Number(index);
        if (startIndex < 0 || startIndex >= initialString.length) {
            return initialString;
        }
        let firstPart = initialString.slice(0, startIndex);
        let secondPart = initialString.slice(startIndex);
        initialString = firstPart + value + secondPart;
        return initialString;
    }

    function removeStop(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if (!initialString[startIndex] || !initialString[endIndex]) { // ако няма такъв стартов индекс; undefined is falsy
            return initialString;
        }

        let subStr = initialString.substring(startIndex, endIndex + 1); // за да вземем последния 
        return initialString.replace(subStr, "");
    }

    function switchValue(oldValue, newValue, initialString) {
        let pattern = new RegExp(oldValue, "g")

        return initialString.replace(pattern, newValue);
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
