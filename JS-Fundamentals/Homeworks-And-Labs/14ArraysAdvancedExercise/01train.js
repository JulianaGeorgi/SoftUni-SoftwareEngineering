function train(arr) {

    let passengersInTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commandNum = arr[i].split(' ');
        if (commandNum[0] === "Add") {
            passengersInTrainArr.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersInTrainArr.length; a++) {
                if (Number(commandNum[0]) + passengersInTrainArr[a] <= maxCapacity) {
                    passengersInTrainArr[a] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }

    console.log(passengersInTrainArr.join(" "));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);