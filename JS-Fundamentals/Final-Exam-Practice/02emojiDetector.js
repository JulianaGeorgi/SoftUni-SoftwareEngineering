function emojiDetector(input) {

    let emojiPattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let emojiMatches = emojiPattern.exec(input);
    let coolEmojis = [];

    let numPattern = /\d/g;
    let numMatches = numPattern.exec(input);
    let numArray = [];

    let coolTreshold = 0;
    let emojiCounter = 0;
    let emojiCoolness = 0;

    while (numMatches) {

        numArray.push(Number(numMatches))
        coolTreshold = numArray.reduce((a, b) => a * b, 1);

        numMatches = numPattern.exec(input);
    }

    while (emojiMatches) {

        emojiCounter++;

        let emojiText = emojiMatches[2]

        for (let i = 0; i < emojiText.length; i++) {
            emojiCoolness+= emojiText.charCodeAt(i);
        }

        if (emojiCoolness > coolTreshold) {
            coolEmojis.push(emojiMatches[0]);
        }

        emojiCoolness = 0;

        emojiMatches = emojiPattern.exec(input);
    }

    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    console.log(`${coolEmojis.join('\n')}`);
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

console.log("--------------------");

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);