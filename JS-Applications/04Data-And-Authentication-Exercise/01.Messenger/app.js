
attachEvents();

function attachEvents() {
    
    document.getElementById("refresh").addEventListener("click", async ()=>{
        const messages = await getMessages();
        displayMessages(messages);
    })
    document.getElementById("submit").addEventListener("click", onSend);
}
//getting the value from the input fields and creating the message object to pass to postMessage
async function onSend(){
    const nameField = document.querySelector('[name="author"]');
    const contentField = document.querySelector('[name="content"]');
    await postMessage({author: nameField.value, content: contentField.value});
    nameField.value = "";
    contentField.value ="";
}
//displaying all existing messages in the comments area
function displayMessages(messages){
    const textArea = document.getElementById("messages");
    textArea.value ="";
    const result = [];
    [...messages].forEach(message => {
        const messageToAppend = `${message.author}: ${message.content}`;
        result.push(messageToAppend);
    });

    textArea.value = result.join('\n');
}
//reading the comments 
async function getMessages(){
    const response = await fetch("http://localhost:3030/jsonstore/messenger");
    const data = await response.json();
    return Object.values(data);
}
//creating the comments
async function postMessage(message){
    const response = await fetch("http://localhost:3030/jsonstore/messenger", {
        method: "post", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });

    const data = await response.json();
    return data;
}