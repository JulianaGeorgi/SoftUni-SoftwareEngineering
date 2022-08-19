// to fix 60/100


function schoolGrades(data) {

    let result = new Map();

    for (let line of data) {
        let tokens = line.split(" ");
        let sum = 0;
        for (let i = 1; i < tokens.length; i++) {
            sum += Number(tokens[i]);
        }

        let name = tokens[0];
        let avgGRade = sum / (tokens.length - 1);

        if(!result.has(name)){
            result.set(name, avgGRade);
        } else {
            let oldAvg = result.get(name);
            let newAvg = (oldAvg + avgGRade) / 2;
            result.set(name, newAvg);
        }
    }

    let sortedEntries = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB])=>{
        return keyA.localeCompare(keyB);
    });

    for(let [k, v] of sortedEntries){
        console.log(`${k}: ${v.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);