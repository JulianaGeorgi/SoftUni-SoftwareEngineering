/*function chessBoard(n) {

    console.log(`<div class="chessboard">`);
    let index = 0;
    let counter = 0;

    while (index < n) {

        index++;
        console.log(`  <div>`);

        for (let i = 1; i <= n; i++) {

            counter++;

            if (i % 2 === 0) {
                console.log(`    <span class="white"></span>`);
            } else {
                console.log(`    <span class="black"></span>`);
            }

        }
        console.log(`  </div>`);
    }

    console.log(`</div>`);
}

chessBoard(3);

*/

function chessBoard(arg) {
    
    let size = Number(arg)
    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>')

        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }

        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }

    console.log('</div>')
}

chessBoard(3);