// You have a non-negative integer. Try to find out how many digits it has.

// Input: A non-negative integer (number).

// Output: An integer (number).

function numberLength(num: number): number {
   return num.toString().length;
};

const result3 = numberLength(20);

console.log(result3);