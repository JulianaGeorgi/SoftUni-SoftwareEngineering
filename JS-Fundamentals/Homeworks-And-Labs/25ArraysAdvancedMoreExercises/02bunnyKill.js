function bunnyKill(array) {

    let coordinates = array // getting the coordinates of the bomb
        .pop()
        .split(' ') // we get an array with two strings (2,2 and 0,1)
        .map(x => x.split(',').map(Number)); 

    let matrix = array.map(el => el.split(' ').map(Number)); // converting each row into an array 

    let snowballDamage = 0;
    let killedBunniesBySnowball = 0;

    dealsDamageFromBombs(coordinates);
    sumDamageAndKilledBunnies();

    console.log(snowballDamage);
    console.log(killedBunniesBySnowball);

    function dealsDamageFromBombs(coordinates) {

        for (let coordinate of coordinates) {
            let [bombRow, bombCol] = coordinate;
            let bunnyBombValue = matrix[bombRow][bombCol];

            if (bunnyBombValue > 0) {
                let startRow = Math.max(0, bombRow - 1); // to not go below 0 of the matrix (the outside array)
                let endRow = Math.min(bombRow + 1, matrix.length - 1); // to not goover the length of the matrix

                for (let row = startRow; row <= endRow; row++) {
                    let startCol = Math.max(0, bombCol - 1); // to not get an index lower than 0 
                    let endCol = Math.min(bombCol + 1, matrix[row].length - 1); // to not get an index outside of the given array

                    for (let col = startCol; col <= endCol; col++) {
                        matrix[row][col] -= bunnyBombValue;

                        if (row === bombRow && col === bombCol) {
                            snowballDamage += bunnyBombValue;
                            killedBunniesBySnowball++;
                        }

                        if (matrix[row][col] < 0) {
                            matrix[row][col] = 0;
                        }
                    }
                }
            }
        }
    }

    function sumDamageAndKilledBunnies() {

        for (let i = 0; i < matrix.length; i++) {
            for (let currBunnyValue of matrix[i]) {

                if (currBunnyValue > 0) {
                    snowballDamage += currBunnyValue;
                    killedBunniesBySnowball++;
                }
            }
        }
    }
}

bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1']);

console.log("----------------");

bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);