function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipesEnum = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function inputHandler(input) { // manager
        let actionHandler = cmdOption(); // cmd will return an object
        let [cmd, option1, option2] = input.split(" ");
        return actionHandler[cmd](option1, option2); // actionHandler returns an object and we access its  property cmd that is actually a function and we call it with option1 and option2
    }

    function cmdOption() { // object of functions that return strings
        return {
            restock: (microelement, quantity) => {
                store[microelement] = store[microelement] + Number(quantity);
                return "Success";
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let str = "";
                let copyStore = JSON.parse(JSON.stringify(store)); // breaks the reference and creates a deep copy
                for (let [key, defaultQuantity] of Object.entries(recipesEnum[recipe])) {
                    let needValue = Number(quantity) * defaultQuantity;
                    if (store[key] < needValue) {
                        isDone = false;
                        str = `Error: not enough ${key} in stock`;
                        break;
                    }
                    copyStore[key] -= needValue;
                }
                if (!isDone) {
                    return str;
                }
                store = copyStore;
                return "Success";
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }
        }
    }
}

let manager = solution(); // solution returns a function
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 