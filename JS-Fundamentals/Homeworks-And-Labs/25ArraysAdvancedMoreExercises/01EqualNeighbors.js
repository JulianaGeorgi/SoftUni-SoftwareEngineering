function equalNeigbours(input) {

    let counter = 0;

    for (let i = 0; i < input.length; i++) {

        let currentArray = input[i];
        let nextArray = input[i + 1];

        for (let j = 0; j < currentArray.length; j++) {

            let currentArrayEl = currentArray[j];
            let currentArrayNextEl = currentArray[j + 1];

            if (nextArray !== undefined) { // if there is no next array

                let nextArrayEl = nextArray[j];

                if (currentArrayEl == nextArrayEl) { // checking for neigbouring equals between first and 2nd array, 2nd and 3rd, etc.
                    counter++;
                }
            }

            if (currentArrayEl === currentArrayNextEl) { // checking for neighbouring equals within the same array
                counter++;
            }
        }
    }

    console.log(counter);
}

equalNeigbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

console.log("-------------------");

equalNeigbours([
    ['test', 'yo', 'yo', 'ho'],
    ['well', 'done', 'no', '6'],
    ['not', 'done', 'yet', '5']]);

console.log("------------------");

equalNeigbours([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);