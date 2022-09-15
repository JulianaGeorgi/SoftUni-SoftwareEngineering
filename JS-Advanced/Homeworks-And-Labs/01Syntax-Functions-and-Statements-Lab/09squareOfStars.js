function squareOfStars(length) {

    for (let i = 1; i <= length; i++) {

        console.log("* ".repeat(length).trimEnd());
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);