// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".


function inventory(array) {

    let inventory = array.shift().split(", ");
    let index = 0;
    let command = array[index];

    while (command !== "Craft!") {

        command = command.split(" - ");
        let actionToTake = command[0];
        let item = command[1];

        switch (actionToTake) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    inventory = inventory.filter(function (elements) { // filtering the array to return it without the item
                        return elements != item;
                    });
                }
                break;
            case "Combine Items":
                item = item.split(":");
                if (inventory.includes(item[0])) {
                    let indexOfItem = inventory.indexOf(item[0]); 
                    inventory.splice(indexOfItem + 1, 0, item[1]); // adding the item after the other
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1); // removing the item from the current position
                    inventory.push(item); // adding it at the end
                }
                break;
        }
        index++;
        command = array[index];
    }

    console.log(inventory.join(", "));

}

inventory(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);

inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);