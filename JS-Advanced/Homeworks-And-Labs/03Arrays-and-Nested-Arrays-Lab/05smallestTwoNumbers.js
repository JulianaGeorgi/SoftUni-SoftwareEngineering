function smallestTwoNumbers (numbers){

    numbers.sort((a, b) => a - b);
    let res = numbers.slice(0, 2).join(' ');
    return res;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));