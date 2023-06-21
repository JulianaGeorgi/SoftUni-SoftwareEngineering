// Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return true.

// Input: A string (string).

// Output: A logic value (boolean).

function isAllUpper(password: string): boolean {
    return password === password.toUpperCase() ? true : false;
}

const result5 = isAllUpper("");

console.log(result5);