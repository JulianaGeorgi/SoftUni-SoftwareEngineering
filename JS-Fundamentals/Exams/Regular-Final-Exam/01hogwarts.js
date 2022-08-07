function hogwarts(input) {

    let spell = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== "Abracadabra") {

        let [action, pam1, pam2] = command.split(" ");

        switch (action) {
            case "Abjuration":
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case "Necromancy":
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case "Illusion":
                let index = Number(pam1);
                let letter = pam2;

                if (index < 0 || index > spell.length - 1) {
                    console.log("The spell was too weak.");
                } else {
                    spell = spell.substring(0, index) + letter + spell.substring(index + letter.length);
                    console.log("Done!");
                }
                break;
            case "Divination":
                let toReplace = pam1;
                let replacement = pam2;

                if (spell.includes(toReplace)) {
                    let pattern = new RegExp(toReplace, 'g');
                    spell = spell.replace(pattern, replacement);
                    console.log(spell);
                }
                break;
            case "Alteration":
                let substring = pam1;
                if (spell.includes(substring)) {
                    let startIndex = spell.indexOf(pam1)
                    let removedStr = spell.substring(startIndex, startIndex + substring.length);
                    spell = spell.replace(removedStr, "");
                    console.log(spell);
                }
                break;
            default:
                console.log("The spell did not work!");
                break;

        }

        index++;
        command = input[index];
    }
}

hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);

console.log("------------------");

hogwarts(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"]);

console.log("---------------------");

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);
