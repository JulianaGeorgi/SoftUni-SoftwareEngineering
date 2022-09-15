function roadRadar(speed, roadType) {


    let roadTypes = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let status = ``;
    let difference = speed - roadTypes[roadType];

    if (speed > roadTypes[roadType]) {
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
    }

    speed > roadTypes[roadType]
        ? console.log(`The speed is ${difference} km/h faster than the allowed speed of ${roadTypes[roadType]} - ${status}`)
        : console.log(`Driving ${speed} km/h in a ${roadTypes[roadType]} zone`);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');