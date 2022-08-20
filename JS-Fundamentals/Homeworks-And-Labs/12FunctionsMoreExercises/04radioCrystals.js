function radioCrystals(input) {

    let targetTickness = input.shift();

    function transportAndWash(crystal) {
        crystal = Math.floor(crystal);
        console.log("Transporting and washing");
    }

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal - (crystal * 0.2);
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function xray(crystal) {
        return crystal + 1;
    }

    for (let i = 0; i < input.length; i++) {

        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;

        let currentTickness = input[i];
        console.log(`Processing chunk ${currentTickness} microns`);

        while (currentTickness / 4 >= targetTickness) {
            currentTickness = cut(currentTickness)
            cutCounter++;
        }

        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            transportAndWash();
        }

        while (currentTickness * 0.8 >= targetTickness) { // to check if the result of decreasing it by 20% is already smaller than the target; as otherwise it will enter the loop and it will go below the target after when it's already inside the loop
            currentTickness = lap(currentTickness);
            lapCounter++;
        }

        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            transportAndWash();
        }

        while (currentTickness - 20 >= targetTickness) {
            currentTickness = grind(currentTickness);
            grindCounter++;
        }

        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            transportAndWash();
        }

        while (currentTickness - 2 >= targetTickness - 1) {
            currentTickness = etch(currentTickness);
            etchCounter++;
        }

        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            transportAndWash();
        }

        if (currentTickness + 1 === targetTickness) {
            currentTickness = xray(currentTickness);
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${Math.floor(currentTickness)} microns`);
    }
}

radioCrystals([1375, 50000]);

console.log("--------------");

radioCrystals([1000, 4000, 8100]);