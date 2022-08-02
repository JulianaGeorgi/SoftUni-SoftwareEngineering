function destinationMapper(string) {

    let pattern = /[=\/][A-Z][A-Za-z]{2,}[=\/]/g;
    let matches = pattern.exec(string);

    let travelPoints = 0;
    let validDestinations = [];

    while (matches) {

        matches.forEach(el => {

            if (el[0] === el[el.length - 1]) {
                el = el.substring(1, el.length - 1);
                travelPoints += el.length;
                validDestinations.push(el);
            }
        });

        matches = pattern.exec(string);
    }

    console.log(`Destinations: ${validDestinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");