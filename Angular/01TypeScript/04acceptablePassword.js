// You are at the beginning of a password series. Every mission is based on the previous one. The missions that follow will become slightly more complex.
// In this mission, you need to create a password verification function.
// The verification condition is:
// the length should be bigger than 6.
// Input: A string.
// Output: A logic value (boolean).
function isAcceptablePassword(password) {
    if (password.length > 6) {
        return true;
    }
    else {
        return false;
    }
}
var result4 = isAcceptablePassword("MickeyMouse");
console.log(result4);
