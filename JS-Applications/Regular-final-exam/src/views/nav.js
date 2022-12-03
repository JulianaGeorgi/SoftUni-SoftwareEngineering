import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
<nav>
    <div>
        <a href="/dashboard">Dashboard</a>
    </div>
    ${!hasUser 
    ? html`
    <!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`
    : html`
    <!-- Logged-in users -->
    <div class="user">
        <a href="/create">Add Album</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`}
</nav>
</header>
`;


export function updateNav() {
    const user = getUserData();
    console.log(user);
    render(navTemplate(user), nav) 
}

function onLogout() {
    logout(); 
    updateNav();
    page.redirect('/dashboard');
}
