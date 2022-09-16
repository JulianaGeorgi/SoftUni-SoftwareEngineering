function printEveryNThElementFromAnArray(arr, step) {

    // let res = [];
    // for (let i = 0; i < arr.length; i += step) {
    //     res.push(arr[i]);
    // }

    // return res;


    return arr.filter((el, i) => {
        if (i % step === 0) {
            return el;
        }
    })
}

printEveryNThElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2);

printEveryNThElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2);

printEveryNThElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6);