function messagesManager(data) {

    let capacity = Number(data.shift());
    let index = 0;
    let command = data[index];
    let messageStorage = {};

    while (command !== "Statistics") {

        let [action, pam1, pam2, pam3] = command.split("=");

        switch (action) {
            case "Add":
                let username = pam1;
                let sent = Number(pam2);
                let received = Number(pam3);
                if (!messageStorage[username]) {
                    messageStorage[username] = [];
                    messageStorage[username].push(sent + received);
                }
                break;
            case "Message":
                let sender = pam1;
                let receiver = pam2;

                if (messageStorage[sender] && messageStorage[receiver]) {
                    messageStorage[sender][0] += 1;
                    messageStorage[receiver][0] += 1;
                }

                if (messageStorage[sender][0] >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete messageStorage[sender];
                } 
                
                if (messageStorage[receiver][0] >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete messageStorage[receiver];
                }
                break;
            case "Empty":
                let currentUser = pam1;
                if (currentUser === "All") {
                    for (let key in messageStorage){
                        if (messageStorage.hasOwnProperty(key)){
                            delete messageStorage[key];
                        }
                    }
                } else {
                    delete messageStorage[currentUser];
                }
                break;
            default:
                break;
        }

        index++;
        command = data[index];
    }

    let userCount = Object.keys(messageStorage).length;
    let users = Object.entries(messageStorage);

    console.log(`Users count: ${userCount}`);

    for (const [user, messages] of users) {
        console.log(`${user} - ${messages[0]}`);
    }
}

messagesManager(["10",
    "Add=Berg=20=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"]);

console.log("---------------");

messagesManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=All",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]);