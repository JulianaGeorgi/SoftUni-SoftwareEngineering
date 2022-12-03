import { render } from "https://unpkg.com/lit-html?module";
import page from "//unpkg.com/page/page.mjs";

import { logout } from './api/data.js';

import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { furnitureView } from "./views/myFurniture.js";
import { registerView } from "./views/register.js";

const root = document.querySelector('.container');

page('/', renderMiddleWare, catalogView);
page('/catalog', renderMiddleWare, catalogView);
page('/create', renderMiddleWare, createView);
page('/details/:id', renderMiddleWare, detailsView);
page('/edit/:id', renderMiddleWare, editView);
page('/login', renderMiddleWare, loginView);
page('/register', renderMiddleWare, registerView);
page('/my-furniture', renderMiddleWare, furnitureView);
page('*', catalogView);

page.start();
updateNav();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    updateNav();
    page.redirect('/');
});

function updateNav() {
    const userSection = document.getElementById('user');
    const guestSection = document.getElementById('guest');
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        userSection.style.display = 'inline-block';
        guestSection.style.display = 'none';
    } else {
        userSection.style.display = 'none';
        guestSection.style.display = 'inline-block';
    }
}

function renderMiddleWare(ctx, next) { // the ctx and next come from page
    ctx.render = (content) => render(content, root); // attaching the render f
    ctx.updateNav = updateNav; // attaching the updateNav f
    next(); // moving to the f after that will already receive the ctx with the render and updateNav (dependency injection)
}