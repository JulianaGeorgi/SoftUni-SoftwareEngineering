function cake(input){

    let w = Number(input[0]);
    let l = Number(input[1]);
    let cakeTotalPieces = w*l;

    let index = 2;
    let command = input[index];
    let eatenPiecesSum = 0;

    while(command !== "STOP"){
        let cakePieces = Number(command);
        eatenPiecesSum+= cakePieces

        if(cakeTotalPieces <= eatenPiecesSum){
            console.log(`No more cake left! You need ${eatenPiecesSum - cakeTotalPieces} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if(cakeTotalPieces>eatenPiecesSum){
        console.log(`${cakeTotalPieces - eatenPiecesSum} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);