function mirrorWords(input) {

    let pattern = /(@|#)[A-Za-z]{3,}(\1)(@|#)[A-Za-z]{3,}(\1)/g; ///(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g; // 
    let matches = pattern.exec(input);

    let mirrorWords = [];
    let pairsCounter = 0;

    while (matches) {

        pairsCounter++;
 
        let word1 = matches[2];
        let word2 = matches[3];
        let reversedWord2 = word2.split('').reverse().join('');
 
        if (word1 === reversedWord2) {
            mirrorWords.push(`${word1} <=> ${word2}`)
        }
 
        matches = pattern.exec(input);
    }

    if (pairsCounter === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairsCounter} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log("-----------------------");
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);