import { html } from "https://unpkg.com/lit-html?module";
import {register} from '../api/data.js';

let page = null; 

export async function registerView(ctx){
    page = ctx.page;
    ctx.render(createRegisterTemp(onSubmit))
}

function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password, rePassword} = Object.fromEntries(formData);
    //validation form!

    register(email, password);
    page.redirect('/');
}

function createRegisterTemp(handler){
    
}