function rotateArray(array) {

    let rotations = Number(array[array.length - 1]);
    let newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }

    for (j = 0; j < rotations; j++) {
        let lastBecomesFirst = newArray.pop();
        newArray.unshift(lastBecomesFirst);
    }

    console.log(newArray.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);