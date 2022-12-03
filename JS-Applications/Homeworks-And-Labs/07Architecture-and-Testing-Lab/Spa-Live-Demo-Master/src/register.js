import { post } from './api.js';
import { checkUserNav } from './auth.js';
import { showCatalogView } from './catalog.js';
import { createSubmitHandler, setUserData } from './util.js';

createSubmitHandler('register-form', onRegister)

const section = document.getElementById('register-view');
section.remove();

export function showRegisterView() {
    document.querySelector('main').appendChild(section);
}

async function onRegister(data) {

    const { email, username, password, repass } = data;


    if (password != repass) {
        return alert('Passwords don\'t match!');
    }
    const userData = await post('/users/register', { email, username, password });

    setUserData(userData);

    checkUserNav();
    showCatalogView();
}
