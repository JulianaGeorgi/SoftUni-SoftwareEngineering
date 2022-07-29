function destinationMapper(input) {

    let points = 0;
    let destinations = [];
    const pattern = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
    const found = input.match(pattern);

    if (found) {

        found.forEach((el, i) => {
            if (el[0] === el[el.length - 1]) {

                el = el.substring(1, el.length - 1);
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