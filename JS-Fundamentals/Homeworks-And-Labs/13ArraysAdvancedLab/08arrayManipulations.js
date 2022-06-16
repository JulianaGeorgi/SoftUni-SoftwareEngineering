function arrayManipulations(array) {

    let originalArray = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i].split(' ');
        let command = currentArray[0];

        switch (command) {
            case "Add":
                originalArray.push(Number(currentArray[1]));
                break;
            case "Remove":
                originalArray = originalArray.filter(function (value) { 
                    return value != currentArray[1]; // if this is false, it will remove it 
                })
                break;
            case "RemoveAt":
                originalArray.splice(currentArray[1], 1);
                break;
            case "Insert":
                originalArray.splice(currentArray[2],0, currentArray[1])
                break;
        }
    }
    console.log(originalArray.join(" "));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);