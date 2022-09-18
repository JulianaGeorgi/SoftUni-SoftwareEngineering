function addAndRemoveElements(arrOfCommands) {

    let res = [];
    let num = 1;

    arrOfCommands.forEach(command => {
        command === "add" ? res.push(num) : res.pop();
        num++;
    })
    return res.length === 0 ? "Empty" : res.join("\n");
}

console.log(addAndRemoveElements(['add',
    'add',
    'add',
    'add']));

console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']));

console.log(addAndRemoveElements(['remove',
    'remove',
    'remove']));