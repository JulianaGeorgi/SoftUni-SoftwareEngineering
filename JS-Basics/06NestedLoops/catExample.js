function catExample() {


    let points = 0;
    let steps = 0;

    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 10; col++) {

            if (row === 1 && col === 4) {
                points += 20;

            } else if (row === 2 && col === 6) {
                points += 20;

            } else if (row === 3 && col === 1) {
                points += 20;

            } else if (row === 1 && col === 8) {
                continue; // не взима точка

            } else if (row === 2 && col === 7) {
                continue; 

            } else if (row === 3 && col === 5) {
                break; 

            } else {
                points++;
            }
        }
    }

    console.log(points);
}

catExample()