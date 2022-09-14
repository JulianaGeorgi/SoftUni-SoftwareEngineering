function greatestCommonDivisor(x, y) {

    let greatestCommonDivisor = 0;

    for (let i = 1; i <= x && i <= y; i++) {

        if (x % i === 0 && y % i === 0) {
            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
