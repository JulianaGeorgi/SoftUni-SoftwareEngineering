function activationKeys(input) {

    let activationKey = input.shift();

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "Generate") {
            console.log(`Your activation key is: ${activationKey}`);
            break;
        }

        let [action, pam1, pam2, pam3] = input[i].split(">>>");

        switch (action) {
            case "Slice":
                let startIndex = Number(pam1);
                let endIndex = Number(pam2);
                let cutString = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(cutString, "");
                console.log(activationKey);
                break;
            case "Flip":
                let startI = Number(pam2);
                let endI = Number(pam3);
                if (pam1 === "Upper") {
                    let strToModify = activationKey.substring(startI, endI);
                    let modifiedStr = strToModify.toUpperCase();
                    activationKey = activationKey.replace(strToModify, modifiedStr);
                    console.log(activationKey);
                } else if (pam1 === "Lower") {
                    let strToModify = activationKey.substring(startI, endI);
                    let modifiedStr = strToModify.toLowerCase();
                    activationKey = activationKey.replace(strToModify, modifiedStr);
                    console.log(activationKey);
                }
                break;
            case "Contains":
                let substring = pam1;
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}.`);
                } else {
                    console.log("Substring not found!");
                }

                break;
        }
    }
}

activationKeys(["abcdefghijklpqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>abg",
    "Contains>>>deF",
    "Generate"]);

console.log("------------------------");

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);