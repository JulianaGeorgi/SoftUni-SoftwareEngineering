function bossRush(input) {

    let n = input.shift();
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    
    let strength = 0;
    let armor = 0;

    for (let i = 0; i < n; i++) {

        let matches = pattern.exec(input[i]);

        if (matches !== null) {
            strength = matches[1].length;
            armor = matches[2].length;


            console.log(`${matches[1]}, The ${matches[2]}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
            matches = pattern.exec(input);
        } else {
            console.log("Access denied!");
        } 
    }
}

// bossRush(['3',
    // '|PETER|:#Lead architect#',
    // '|GEORGE|:#High Overseer#',
    // '|ALEX|:#Assistant Game Developer#']);

console.log("----------------");

bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);