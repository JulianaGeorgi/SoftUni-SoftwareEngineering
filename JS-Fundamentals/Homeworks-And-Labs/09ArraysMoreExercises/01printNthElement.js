function printNthElement(array) {

    let step = Number(array[array.length - 1]);
    let newArray = [];

    for (i = 0; i < array.length - 1; i += step) {
        newArray.push(array[i]);
    }

    console.log(newArray.join(" "));
}

printNthElement(['dsa', 'asd', 'test', 'test', '2']);