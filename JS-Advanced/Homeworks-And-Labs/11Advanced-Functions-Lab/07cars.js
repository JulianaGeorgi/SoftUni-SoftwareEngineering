function cars(input) {

    let collection = {};

    let objectFactory = {
        create: (name, word, parentName) => {
            if (word) {
                collection[name] = Object.create(collection[parentName]);
            } else {
                collection[name] = {};
            }
        },
        set(name, key, value) {
            collection[name][key] = value;
        },
        print(name) {
            const entries = [];
            for (const key in collection[name]) {
                entries.push(`${key}:${collection[name][key]}`);
            }
            console.log(entries.join(','));
        }
    }

    for (let line of input) {
        let [command, name, p1, p2] = line.split(" ");
        objectFactory[command](name, p1, p2);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);