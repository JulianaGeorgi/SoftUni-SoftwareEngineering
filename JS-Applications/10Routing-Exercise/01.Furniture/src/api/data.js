import * as api from './api.js';

const endpoint = {
    'login': 'users/login', 
    'register': 'users/register', 
    'logout': 'users/logout', 
    'createItem': 'data/catalog', 
    'getAllItems': 'data/catalog',
    'getItemById': 'data/catalog/',
    
}
export async function login(email, password){
    const res = await api.post(endpoint.login, {email, password} );
    sessionStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(email, password){
    const res = await api.post(endpoint.register, {email, password});
    sessionStorage.setItem('userData', JSON.stringify(res));
}

export async function logout(){
    const res = await api.get(endpoint.logout);
    sessionStorage.removeItem('userData');
}

export async function createItem(data){
    const res = await api.post(endpoint.createItem, data);
    return res;
}

export async function getAllItems(){
    const res = await api.get(endpoint.getAllItems);
    return res;
}

export async function getItemById(id){
    const res = await api.get(endpoint.getItemById + id);
    return res;
}

export async function updateById(id, data){
    const res = await api.put(endpoint.getItemById + id, data);
    return res; 
}

export async function deleteItem(id){
    const res = await api.del(endpoint.getItemById + id);
}

export async function getMyItems(){
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData && userData._id;
    let id = `${userId}%22`;
    const res = await api.get(endpoint.myItem + id);
    return res;
}