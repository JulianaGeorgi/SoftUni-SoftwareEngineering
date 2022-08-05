function passwordReset(input) {

    let password = input.shift();

    let index = 0;
    let line = input[index];
    let result = "";

    while (line !== "Done") {

        let [action, pam1, pam2] = line.split(" ");

        switch (action) {
            case "TakeOdd":
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        result += password[i];
                    }
                }
                password = result;
                console.log(password);
                break;
            case "Cut":
                let startIndex = Number(pam1);
                let length = Number(pam2);
                let cutString = password.substring(startIndex, startIndex + length);
                password = password.replace(cutString, "");
                console.log(password);
                break;
            case "Substitute":
                let substring = pam1;
                let replacement = pam2;
                if (password.includes(substring)) {
                    let pattern = new RegExp(substring, 'g');
                    password = password.replace(pattern, replacement);
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }

                break;
        }

        index++;
        line = input[index];
    }

    console.log(`Your password is: ${password}`);

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

console.log("---------------------");

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);