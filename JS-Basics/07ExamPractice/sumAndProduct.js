function sumAndProduct(input) {

    let n = Number(input[0]);
    let endNum = n % 10;

    for (let a = 1; a < 10; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c < 10; c++) {
                for (let d = 9; d >=c; d--) {

                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    let res = Math.trunc(product / sum);

                    if (a + b + c + d === a * b * c * d) {

                        if (endNum === 5) {
                            console.log(`${a}${b}${c}${d}`);
                            return;

                        }
                    }

                    if (res === 3) {
                        if (n % 3 === 0) {
                            console.log(`${d}${c}${b}${a}`);
                            return;
                        }
                    }
                }
            }
        }
    }

    console.log("Nothing found");
}

sumAndProduct(["145"]);