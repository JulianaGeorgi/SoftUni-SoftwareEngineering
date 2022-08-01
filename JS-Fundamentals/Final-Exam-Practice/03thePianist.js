function thePianist(data) {

    let n = Number(data.shift());
    let list = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = data.shift().split("|");
        if (!list.hasOwnProperty(piece)) {
            list[piece] = {}; // creating the piece into the storage; for a value -> put an empty object
        }
        list[piece][composer] = key; // from the empty object take the composer(stil undefiend) and I add the value key (new object is created within the other one)
    }

    let index = 0;
    let command = data[index];

    while (command !== "Stop") {
        let [action, piece, composer, key] = command.split("|");

        switch (action) {
            case "Add":
                if (list.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    break;
                }

                list[piece] = {}; // adding the piece; same as store[piece] = {composer, key}
                list[piece][composer] = key; // достъпваме обекта и си добавяме пропърти 
                console.log(`${piece} by ${composer} in ${key} added to the collection!`); // we have them from the deconstruction

                break;
            case "Remove":
                if (!list.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }

                delete list[piece]; // from the list delete the piece
                console.log(`Successfully removed ${piece}!`);
                break;

            case "ChangeKey":

                if (!list.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }

                let newKey = composer;

                for (let [keyComposer, valueKey] of Object.entries(list[piece])) {
                    list[piece][keyComposer] = newKey;
                }

                console.log(`Changed the key of ${piece} to ${newKey}!`);
                break;
        }

        index++;
        command = data[index];
    }

    for (let [piece, composer] of Object.entries(list)) {
        for (let composerKey of Object.keys(list[piece])) {
            console.log(`${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`);
        }
    }
}

thePianist(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

thePianist(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);