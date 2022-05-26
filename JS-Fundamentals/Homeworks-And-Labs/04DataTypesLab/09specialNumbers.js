function specialNumbers(n) {

    for (i = 1; i <= n; i++) {

        if (i > 9) {

            i = i.toString();
            let sum = 0;

            for (let i2 = 0; i2 < i.length; i2++) {
                sum += Number(i[i2]);
            }

            if(sum === 5 || sum === 7 || sum === 11){
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }

        } else if (i === 5 || i === 7) {
            console.log(`${i} -> True`);

        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(20);