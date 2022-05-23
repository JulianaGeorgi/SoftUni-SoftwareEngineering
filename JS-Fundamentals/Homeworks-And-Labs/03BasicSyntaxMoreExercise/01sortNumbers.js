function sortNumbers(a,b,c) {
    let max = Math.max(a,b,c);
    let min = Math.min(a,b,c);

    if(max == a){
        if (min === c){
            console.log(`${a}\n${b}\n${c}`);
        } else {
            console.log(`${a}\n${c}\n${b}`);
        }
    } else if(max == b){
        if (min === c){
            console.log(`${b}\n${a}\n${c}`);
        } else {
            console.log(`${b}\n${c}\n${a}`);
        }
    } else if (max == c) {
        if (min === b){
            console.log(`${c}\n${a}\n${b}`);
        } else {
            console.log(`${c}\n${b}\n${a}`);
        }
    } else {
        console.log(`${a}\n${b}\n${c}`);
    }
}

sortNumbers(0, 0, 2);