function secretChat(input) {

    let message = input.shift();

    let index = 0;
    let line = input[index];

    while (line !== "Reveal") {

        let [action, pam1, pam2] = line.split(":|:");

        switch (action) {
            case "InsertSpace":
                let index = Number(pam1);
                let firstPart = message.substring(0, index);
                let lastPart = message.substring(index);
                message = firstPart + " " + lastPart;
                console.log(message);
                break;
            case "ChangeAll":
                let toReplace = pam1;
                let replacement = pam2;
                let pattern = new RegExp(toReplace, 'g');
                message = message.replace(pattern, replacement);
                console.log(message);
                break;
            case "Reverse":
                let string = pam1;
                if (!message.includes(string)) {
                    console.log("error");
                } else {
                    let startIndex = message.indexOf(string);
                    let firstPart = message.substring(0, startIndex);
                    let secondPart = message.substring(startIndex + string.length);
                    let cutString = message.substring(startIndex, startIndex + string.length).split("").reverse().join("");
                    message = firstPart + secondPart + cutString;
                    console.log(message);
                }
                break;
        }

        index++;
        line = input[index];
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

console.log("-----------------");

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);