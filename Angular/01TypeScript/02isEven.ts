// Check if the given number is even or not. Your function should return true if the number is even, and false if the number is odd.

// Input: A number.

// Output: Logic value (boolean).

function isEven(num: number): boolean {
    return !(num % 2);
};

const result2 = isEven(10);

console.log(result2);