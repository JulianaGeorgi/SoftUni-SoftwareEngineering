function theImitationGame(input) {

    let message = input.shift();

    let index = 0;
    let command = input[index];

    while (command !== "Decode") {

        let currentLine = command.split("|");
        let currentCommand = currentLine.shift();

        switch (currentCommand) {
            case "ChangeAll":
                let substring = currentLine[0];
                let replacement = currentLine[1];
                while (message.indexOf(substring) >= 0) {
                    message = message.replace(substring, replacement);
                }
                break;
            case "Insert":
                let index = Number(currentLine[0]);
                let toInsert = currentLine[1];
                message = message.slice(0, index) + toInsert + message.slice(index);
                break;
            case "Move":
                let moveCount = Number(currentLine[0]);
                let lastPart = message.substring(0, moveCount);
                let firstPart = message.substring(moveCount);
                message = firstPart + lastPart;
        }
        index++;
        command = input[index];
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);