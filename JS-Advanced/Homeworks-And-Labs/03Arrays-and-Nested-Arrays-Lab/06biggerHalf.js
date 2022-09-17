function biggerHalf(numbers){

    numbers.sort((a,b) => a - b);
    let biggerHalf = numbers.splice(numbers.length /2);
    return biggerHalf;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);