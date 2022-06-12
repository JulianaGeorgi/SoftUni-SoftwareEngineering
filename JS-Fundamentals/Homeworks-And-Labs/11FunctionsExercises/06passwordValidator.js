function passwordValidator(input) {

    if (lengthCheck(input) === false) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (containsSpecialChars(input) === true) {
        console.log("Password must consist only of letters and digits");
    }

    if (hasTwoNumbers(input) === false) {
        console.log("Password must have at least 2 digits");
    }

    if(lengthCheck(input) === true && containsSpecialChars(input) === false && hasTwoNumbers(input) === true){
        console.log("Password is valid");
    }

    function lengthCheck(input) {
        if (input.length < 6 || input.length > 10) {
            return false;
        } else {
            return true;
        }
    }
    
    
    function containsSpecialChars(input) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(input);
    }
    
    function hasTwoNumbers(input) {
        return /\d{2}/.test(input);
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');