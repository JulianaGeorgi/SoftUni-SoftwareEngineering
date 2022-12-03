// responsible for login and register 

import {clearUserData, setUserData} from "../util.js"
import { get, post } from "./api.js";

export async function login(email, password) {
    const {_id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({
        _id,
        email:resultEmail,
        accessToken
    });
}

export async function register(email, password) {
    const {_id, email: resultEmail, accessToken} = await post('/users/register', { email, password });

    setUserData({
        _id,
        email:resultEmail,
        accessToken
    });
}

export async function logout(){
    get('/users/logout');
    clearUserData(); // will be completed before the above line as it's not an async function
}