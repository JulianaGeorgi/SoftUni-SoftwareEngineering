function phoneShop(array) {

    let phoneList = array.shift().split(", ");
    let index = 0;
    let command = array[index];

    while (command !== "End") {

        command = command.split(" - ");
        let actionToTake = command[0];
        let phone = command[1];


        switch (actionToTake) {
            case "Add":
                if (!phoneList.includes(phone)) {
                    phoneList.push(phone);
                }
                break;
            case "Remove":
                if (phoneList.includes(phone)) {
                    phoneList = phoneList.filter(function (elements) { // filtering the array to return it without the phone
                        return elements != phone;
                    });
                }
                break;
            case "Bonus phone":
                phone = phone.split(":");
                let oldPhone = phone[0];
                let newPhone = phone[1];
                if (phoneList.includes(oldPhone)) {
                    let indexOfPhone = phoneList.indexOf(oldPhone);
                    phoneList.splice(indexOfPhone + 1, 0, newPhone)
                }
                break;
            case "Last":
                if (phoneList.includes(phone)) {
                    let indexToCut = phoneList.indexOf(phone);
                    let phoneToMove = phoneList.splice(indexToCut, 1);
                    phoneList.push(phoneToMove);
                }
                break;
        }

        index++;
        command = array[index];
    }
    console.log(phoneList.join(", "));

}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);

phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"]);