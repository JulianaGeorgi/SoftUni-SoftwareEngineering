// Write a program that helps you keep track of your shot targets. You will receive a sequence with integers, separated by a single space, representing targets and their value. Afterward, you will be receiving indices until the "End" command is given, and you need to print the targets and the count of shot targets.
// Every time you receive an index, you need to shoot the target on that index, if it is possible. 
// Every time you shoot a target, its value becomes -1, and it is considered shot. Along with that, you also need to:
// •	Reduce all the other targets, which have greater values than your current target, with its value. 
// •	Increase all the other targets, which have less than or equal value to the shot target, with its value.
// Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered shot.
// When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:
// "Shot targets: {count} -> {target1} {target2}… {targetn}"
// Input / Constraints
// •	On the first line of input, you will receive a sequence of integers, separated by a single space – the targets sequence.
// •	On the following lines, until the "End" command, you be receiving integers each on a single line – the index of the target to be shot.
// Output
// •	The format of the output is described above in the problem description.


function shootForTheWin(array) {

    let sequence = array.shift().split(" ").map(Number);
    let index = 0;
    let command = array[index];
    let shotCount = 0;

    while (command !== "End") {
        let target = Number(command);

        if (target < 0 || target >= sequence.length) { // checking if the index is outside of the sequence 
            index++;
            command = array[index];
            continue;
        }

        let targetValue = sequence[target]; // saving the value before shooting the target and decreasing it to -1
        sequence[target] = -1; 

        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === -1) { // if the target is already shot (= -1), no changes need to be done
                sequence[i] = -1;
                continue;
            }

            if(sequence[i] <= targetValue){
                sequence[i] = sequence[i] + targetValue;

            } else if (sequence[i] > targetValue){
                sequence[i] = sequence[i] - targetValue;

            }
        }
        index++;
        command = array[index];
    }

    sequence.forEach(element => { // checking how many targets were shot down (= -1)
        if (element === -1) {
            shotCount++;
        }
    });

    console.log(`Shot targets: ${shotCount} -> ${sequence.join(" ")}`);

}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);
