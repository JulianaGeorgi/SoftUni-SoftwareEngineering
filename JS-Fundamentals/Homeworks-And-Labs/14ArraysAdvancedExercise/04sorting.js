function sorting(array) {

    let res = [];
    array.sort((a, b) => a - b);

    let bigNums = array.slice(array.length / 2).sort((a,b)=> (b-a));
    let smallNums = array.slice(0, array.length / 2);


    for (let i = 0; i < bigNums.length; i++) {
        res.push(bigNums[i]);
        if (smallNums[i] != undefined){
            res.push(smallNums[i]);
        }
    }

    console.log(res.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 1000]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);