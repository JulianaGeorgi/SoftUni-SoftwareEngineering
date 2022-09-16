function addAndRemoveElements(arrOfCommands) {

    let res = [];
    let num = 1;

    arrOfCommands.forEach(command => {
        command === "add" ? res.push(num) : res.pop();
        num++;
    })
    return res.length === 0 ? "Empty" : res.join("\n");
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']);

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);

addAndRemoveElements(['remove',
    'remove',
    'remove']);