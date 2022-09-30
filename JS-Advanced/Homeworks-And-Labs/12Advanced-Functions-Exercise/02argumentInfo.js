function argumentInfo(...params) { // we don't know the type of what we are getting
    let res = {};
    for (let el of params) {
        let type = typeof (el);
        console.log(`${type}: ${el}`);

        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }
        res[type] = res[type] + 1; // assigning new value
    }

    let buff = "";
    for (let [k, v] of Object.entries(res)) {
        buff += `${k} = ${v}\n`;
    }
    console.log(buff);
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });