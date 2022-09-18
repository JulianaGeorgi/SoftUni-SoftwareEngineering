function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {

        let cutEl = arr.pop();
        arr.unshift(cutEl);
    }

    console.log(arr.join(" "));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);