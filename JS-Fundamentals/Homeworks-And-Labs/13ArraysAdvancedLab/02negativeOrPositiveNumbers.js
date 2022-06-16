function negativeOrPositive(arr) {

    let res = [];
    for (let el of arr) {
        el = Number(el);
        if (el < 0) {
            res.unshift(el);
        } else {
            res.push(el);
        }
    }

    console.log(res.join("\n"));

}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);