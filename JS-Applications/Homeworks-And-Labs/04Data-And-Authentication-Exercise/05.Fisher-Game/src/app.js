window.addEventListener('DOMContentLoaded', onLoadHTML); // when page is loaded
document.getElementById('logout').addEventListener('click', onLogout);
document.querySelector('.load').addEventListener('click', onLoadCatch);
document.getElementById('addForm').addEventListener('submit', createCatch);

async function onLogout() {
    const url = 'http://localhost:3030/users/logout';
    const header = getHeader('GET', '');
    const response = await fetch(url, header);
    sessionStorage.clear();
    onLoadHTML();
}

function onLoadHTML() {
    // check if we have a token to see if we are logged in
    const token = sessionStorage.getItem('accessToken');
    const userName = document.querySelector('p.email span');
    const addBtn = document.querySelector('.add');

    if (token) {
        document.getElementById('guest').style.display = 'none'; // to hide the register and login buttons
        document.getElementById('user').style.display = 'inline-block';
        userName.innerHTML = sessionStorage.getItem('email');
        addBtn.disabled = false;
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
        userName.innerHTML = 'guest';
        addBtn.disabled = true;
    }
}

async function onLoadCatch() {
    const url = 'http://localhost:3030/data/catches';
    const response = await fetch(url);
    const data = await response.json();
    //render method
    return data;
}

function createCatch(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    onCreateCatch(data);
}

async function onCreateCatch(body) {
    const url = 'http://localhost:3030/data/catches';
    const header = getHeader('POST', body);
    const response = await fetch(url, header);
    const data = await response.json();
    return data;
}

function getHeader(method, body) {
    const token = sessionStorage.getItem('accessToken');
    const header = {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
    }
    if (body) {
        header.body = JSON.stringify(body);
    }
    return header;
}