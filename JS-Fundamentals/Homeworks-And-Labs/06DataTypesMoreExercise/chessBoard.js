/* function chessBoard(n) {

    console.log(`<div class="chessboard">`);
    let index = 0;
    let isStarted = false;
    let isFinished = false;
    let counter = 0;

    while (index < n) {

        index++;

        for (let i = 1; i <= n; i++) {

            counter++;

            if(i === 1){
                isStarted = true;
                console.log(`  <div>`);
            }

           
            if (counter % 2 === 0) {
                console.log(`    <span class="white"></span>`);
            } else {
                console.log(`    <span class="black"></span>`);
            }

            if(i === n){
                isFinished = true;
                console.log(`  </div>`);
            }
        }

    }

    console.log(`</div>`);

}

chessBoard(3);

*/

function chessBoard(size) {
    console.log(`<div class="chessboard">`);
    let counter = 0;
    for (let i = 0; i < size; i++) {
        console.log(`  <div>`);
        counter++;
        for (let j = 0; j < size; j++) {
            if(counter % 2 === 1){
                if (j % 2 === 1) {
                    console.log(`\t<span class="white"></span>`);
                } else {
                    console.log(`\t<span class="black"></span>`);
                }
            }else{
                if (j % 2 === 1) {
                    console.log(`\t<span class="black"></span>`);
                } else {
                    console.log(`\t<span class="white"></span>`);
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chessBoard(3);