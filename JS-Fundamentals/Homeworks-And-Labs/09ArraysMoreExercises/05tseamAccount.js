function tseamAccount(array) {

    let currentGameList = array[0].split(" ");
    let newGameList = [];
    
    for (let n = 0; n < currentGameList.length; n++) {
        newGameList.push(currentGameList[n]);
    }

    for (let i = 1; i < array.length - 1; i++) {

        let currentCommand = array[i].split(" ");
        let command = currentCommand[0];
        let game = currentCommand[1];

        while (command !== "Play!") {

            if (command === "Install") {

                if (!newGameList.includes(game)) {
                    newGameList.push(game);
                }


            } else if (command === "Uninstall") {
                newGameList = newGameList.filter(e => e !== game);

            } else if (command === "Update") {

                if (newGameList.includes(game)) {
                    newGameList = newGameList.filter(e => e !== game);
                    newGameList.push(game);
                }

            } else if (command === "Expansion") {

                let gameExpansion = game.split("-");
                let gameToSearch = gameExpansion[0];
                let expansion = gameExpansion[1];

                if (newGameList.includes(gameToSearch)) {
                    let index = newGameList.indexOf(gameToSearch);
                    newGameList.splice(index + 1, 0, `${gameToSearch}:${expansion}`);
                }
            }

            break;
        }
    }
    console.log(newGameList.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install Diablo',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);