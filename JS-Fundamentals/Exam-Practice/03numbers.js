// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].


function numbers(nums) {

    nums = nums.split(" ").map(Number);
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    let average = sum / nums.length;
    let newNums = [];

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        if (currentNum > average) {
            newNums.push(currentNum);
        } else {
            continue;
        }
    }

    newNums.sort((a, b) => b - a);

    if (newNums.length === 0) {
        console.log("No");
    } else if (newNums.length > 5) {
        newNums.splice(5);
        console.log(newNums.join(" "));
    } else {
        console.log(newNums.join(" "));
    }

}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('-1 -2 -3 -4 -5 -6');
numbers('1');