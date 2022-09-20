function solve(...commands) {

    let initial = Number(commands.shift());
    
    const parser = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x * 0.8
    };
    for (let command of commands) {
        initial = parser[command](initial); //parser from command, call it with initial
        console.log(initial);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');