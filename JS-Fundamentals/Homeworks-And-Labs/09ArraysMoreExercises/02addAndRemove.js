function addAndRemove(stringArray) {

    let newArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        let command = stringArray[i];

        if (command === "add") {
            newArray.push(i + 1);
        } else if (command === "remove") {
            newArray.pop();
        }
    }

    if (newArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArray.join(" "));
    }
}

addAndRemove(['remove', 'remove', 'remove']);