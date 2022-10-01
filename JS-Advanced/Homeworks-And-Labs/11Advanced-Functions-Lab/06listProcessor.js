function listProcessor(input) {
    let res = [];
    const commands = {
        add: (string) => {
            res.push(string);
        },
        remove: (string) => {
            res = res.filter(el => el !== string);
        },
        print: () => {
            console.log(res.join(","));
        }
    }
    for (let line of input) {
        let [command, string] = line.split(" ");
        commands[command](string);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log("-----------------");

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);