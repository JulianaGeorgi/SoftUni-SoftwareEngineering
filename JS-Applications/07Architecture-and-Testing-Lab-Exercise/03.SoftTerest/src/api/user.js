import {get, post} from './api.js'

//enumeration
const endpoints = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
}

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user)); //local storage only works with strings, not objects
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
    get(endpoints.logout);
    sessionStorage.removeItem('user');
}