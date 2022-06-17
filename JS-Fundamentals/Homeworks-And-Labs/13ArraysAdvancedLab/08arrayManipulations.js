function arrayManipulations(array) {

    let modifiedArray = array.shift().split(' ').map(Number);

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i].split(' ');
        let command = currentArray[0];

        switch (command) {
            case "Add":
                modifiedArray.push(Number(currentArray[1]));
                break;
            case "Remove":
                modifiedArray = modifiedArray.filter(function (value) { 
                    return value != currentArray[1]; 
                })
                break;
            case "RemoveAt":
                modifiedArray.splice(currentArray[1], 1);
                break;
            case "Insert":
                modifiedArray.splice(currentArray[2],0, currentArray[1])
                break;
        }
    }
    console.log(modifiedArray.join(" "));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);