function largestNumber(x, y, z){

    let largestNum = 0;

    if(x >= y && x >= z){
        largestNum = x;
    } else if(y >= x && y >= z){
        largestNum = y;
    } else {
        largestNum = z;
    }

    console.log(`The largest number is ${largestNum}.`);

}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);