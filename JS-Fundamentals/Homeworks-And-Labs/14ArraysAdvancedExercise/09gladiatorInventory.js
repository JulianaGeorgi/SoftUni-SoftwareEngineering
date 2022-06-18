function gladiatorInventory(array) {

    let inventory = array.shift().split(" ");

    for (let i = 0; i < array.length; i++) {

        let commands = array[i].split(" ");
        let currentCommand = commands[0];
        let item = commands[1];

        switch (currentCommand) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Trash":
                if (inventory.includes(item)) {
                    let filteredInventory = inventory.filter(function (items) {
                        return items != item;
                    })
                    inventory = filteredInventory;
                }
                break;
            case "Repair":
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    let repairedItem = inventory.splice(indexOfItem, 1).join("");
                    inventory.push(repairedItem);
                }

                break;
            case "Upgrade":
                let itemUpgrade = item.split("-");
                if (inventory.includes(itemUpgrade[0])) {
                    let indexOfItem = inventory.indexOf(itemUpgrade[0]) + 1;
                    inventory.splice(indexOfItem, 0, item.replace("-",":"));
                }
                break;
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);