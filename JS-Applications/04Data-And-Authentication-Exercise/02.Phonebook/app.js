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
        personField.value = "";
        phoneField.value = "";

        load();

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

        //DELETE
        document.getElementById(contact._id).addEventListener('click', async (e) => {
            const id = e.target.value;
            const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
                method: 'delete'
            });
            load();
        });
    });
}

attachEvents();