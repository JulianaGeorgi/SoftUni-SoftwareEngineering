// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"


function shoppingList(array) {

    let shoppingList = array.shift().split("!");
    let index = 0;
    let command = array[index];

    while (command !== "Go Shopping!") {

        let [currentCommand, product, newNameOfProduct] = command.split(" ");

        switch (currentCommand) {
            case "Urgent":
                if (!shoppingList.includes(product)) {
                    shoppingList.unshift(product);
                }
                break;
            case "Unnecessary":
                if (shoppingList.includes(product)) {
                    let indexToRemove = shoppingList.indexOf(product);
                    shoppingList.splice(indexToRemove, 1);
                };
                break;
            case "Correct": if (shoppingList.includes(product)) {
                let indexToReplace = shoppingList.indexOf(product);
                shoppingList.splice(indexToReplace, 1, newNameOfProduct);
            }
                break;
            case "Rearrange": if (shoppingList.includes(product)) {
                let indexToMove = shoppingList.indexOf(product);
                let productToMove = shoppingList.splice(indexToMove, 1);
                shoppingList.push(productToMove);
                break;
            }

            default: break;
        }

        index++;
        command = array[index]
    }

    console.log(shoppingList.join(", "));

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);