function flightSchedule(data) {
    class Flight {
        constructor(flightNumber, destination) {
            this.flightNumber = flightNumber;
            this.destination = destination;
            this.status = "Ready to fly";
        }
    }

    let result = [];

    for (let flightInfo of data[0]) { // getting the info we need for the constructor
        let token = flightInfo.split(" ");
        let flightNumber = token.shift();
        let destination = token.join(" "); // New York 

        let myFlight = new Flight(flightNumber, destination);
        result.push(myFlight);
    }

    for (let token of data[1]) {
        let tokens = token.split(" ");
        let findFlight = result.filter(obj => obj.flightNumber === tokens[0]);
        if (findFlight[0]) {
            findFlight[0].status = "Cancelled";
        }
    }

    // let command = data[2][0];
    // switch (command)

    switch (data[2][0]) { // to get the 0 elemnt of the array on index 2 of data
        case "Cancelled":
            let cancelledFlights = result.filter(obj => obj.status === "Cancelled");
            cancelledFlights.forEach(x => console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`));
            break;
        case "Ready to fly":
            let readyToFly = result.filter(obj => obj.status === "Ready to fly");
            readyToFly.forEach(x => console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`));
            break;
    }
}


flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']]);