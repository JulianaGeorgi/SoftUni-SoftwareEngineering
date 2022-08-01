// During World War 2, you are a mathematician who has joined the cryptography team to decipher the enemy's enigma code. Your job is to create a program to crack the codes. 
// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its true content. There are several types of instructions, split by '|'
// •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// •	On the first line, you will receive a string with a message.
// •	On the following lines, you will be receiving commands, split by '|' .
// Output
// •	After the "Decode" command is received, print this message:
// "The decrypted message is: {message}"


function imitationGame(array) {

    let message = array.shift();
    let index = 0;
    let command = array[index];

    while (command !== "Decode") {

        let currentCommand = array[index].split("|");
        
        switch (currentCommand[0]) {
            case "ChangeAll":
                if (message.includes(currentCommand[1])) {
                    message = message.replace(currentCommand[1], currentCommand[2]);
                    continue;
                }
                break;
            case "Insert":
                message = message.split('');
                message.splice(currentCommand[1], 0, currentCommand[2]);
                message = message.join("");
                break;
            case "Move":
                message = message.split('');
                let charToMove = message.splice(0, (currentCommand[1])).join('');
                message.push(charToMove);
                message = message.join("");
                break;
        }

        index++;
        command = array[index];
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
imitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);