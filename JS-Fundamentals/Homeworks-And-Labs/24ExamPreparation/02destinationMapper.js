function destinationMapper(input) {

    let points = 0;
    let destinations = [];
    const pattern = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
    const found = input.match(pattern);

    if (found) {

        found.forEach((el, i) => {
            if (el[0] === el[el.length - 1]) { // // to check if the char on the 0 index is the same as the one on the last 

                el = el.substring(1, el.length - 1); // cutting the char at the beginning and end
                points += el.length;
                destinations.push(el);
            }
        });

    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");