function printDNA(length){

    let pattern = "ATCGTTAGGG".split("");

    for (let i = 1; i <= length; i++) {
        let [firstChar, secondChar] = pattern.splice(0, 2);

        if (i % 4 === 1) {
            console.log(`**${firstChar}${secondChar}**`);
        } else if (i % 2 === 0) {
            console.log(`*${firstChar}--${secondChar}*`);
        } else {
            console.log(`${firstChar}----${secondChar}`);
        }

        pattern.push(firstChar, secondChar);
    }
}

printDNA(4);

/*

**AT**
*C--G*
T----T
*A--G*
**GG**
*A--T*
C----G
*T--T*
**AG**
*G--G*

*/