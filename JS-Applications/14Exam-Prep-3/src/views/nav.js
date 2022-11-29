import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";

const nav = document.querySelector('header');

const navTemp = (hasUser) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

<nav>
    <div>
        <a href="/offers">Dashboard</a>
    </div>
    ${!hasUser 
    ? html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>` 
    : html`<div class="user">
        <a href="/create">Create Offer</a>
        <a  @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`}
</nav>
`;

export async function updateNav() {
    const user = await getUserData();
    render(navTemp(user), nav)
}

export function onLogout(){
    logout();
    updateNav();
    page.redirect('/');
}
