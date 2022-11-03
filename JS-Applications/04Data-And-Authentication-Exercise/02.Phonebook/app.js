const phoneBook = document.getElementById("phonebook");
const personField = document.getElementById('person');
const phoneField = document.getElementById('phone');

function attachEvents() {
    document.getElementById("btnLoad").addEventListener('click', async () => {
        load();
    });

    //post request 
    document.getElementById("btnCreate").addEventListener('click', async () => {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person: personField.value, phone: phoneField.value })
        });
        personField.value = ""; // clearing the input fields once the submit is done
        phoneField.value = "";
        load(); // calling load, so that the new contact entry appears the moment we click to submit (create) it
    });
};

async function load() {
    phoneBook.innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    //displaying the contacts in the phone book
    Object.values(data).forEach(contact => {
        const li = document.createElement("li");
        li.innerHTML = `${contact.person}: ${contact.phone}<button value="${contact._id}" id="${contact._id}"class="btnDelete">Delete</button>`;
        phoneBook.appendChild(li);

        //delete request 
        document.getElementById(contact._id).addEventListener('click', async (e) => { // adding the event listener to each delete button
            const id = e.target.value; // the target is the exact button, the value is the id; it comes here only when a button is clicked
            const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                method: 'delete'
            });
            load(); // calling load, so that when we click on "delete" the contact disappears
        });
    });
}

attachEvents();