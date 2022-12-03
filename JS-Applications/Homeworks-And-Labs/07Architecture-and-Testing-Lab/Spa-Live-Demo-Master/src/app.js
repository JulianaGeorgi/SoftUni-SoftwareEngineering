import { checkUserNav, onLogout } from './auth.js';
import { showHomeView } from './home.js';
import { showCatalogView } from './catalog.js';
import { showLoginView } from './login.js';
import { showRegisterView } from './register.js';
import './details.js';

//init with delegation
document.querySelector('nav').addEventListener('click', onNavigate);

/*
The other way to do it:
 function registerView(id, callback) { // callback is the view 
     document.getElementById(id).addEventListener('click', callback);
 }
*/

const views = {
    "home-link": showHomeView,
    "catalog-link": showCatalogView,
    "login-link": showLoginView,
    "register-link": showRegisterView,
    "logout-link": onLogout
};

checkUserNav();

// Start application in home view
showHomeView();

function onNavigate(event){
    if(event.target.tagName == 'A'){ // checking if we clicked on the right thing
        const id = event.target.id; // getting the id of the clicked element
        const view = views[id];
        if(typeof view == 'function'){ // checking as it can be null or undefined
            event.preventDefault();
            document.querySelector('main').replaceChildren(); // when you click on login, register, etc. to display only that section and not to pile them on top of each other
            view();
        }
    }
}