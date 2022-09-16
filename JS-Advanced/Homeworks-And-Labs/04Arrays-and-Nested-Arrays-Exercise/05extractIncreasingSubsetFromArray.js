function extractIncreasingSubsetFromArray(arr) {

    let res = [];
    let biggestOne = arr[0];
    arr.reduce((acc, currentElement) => {
        if(biggestOne <= currentElement){
            acc.push(currentElement);
            biggestOne = currentElement;
        }
        return acc
    }, []);

    console.log(res);
}

extractIncreasingSubsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

extractIncreasingSubsetFromArray([1,
    2,
    3,
    4]);

extractIncreasingSubsetFromArray([20,
    3,
    2,
    15,
    6,
    1]);