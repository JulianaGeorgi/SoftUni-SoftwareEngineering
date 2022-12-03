import { html, render } from 'https://unpkg.com/lit-html?module'; 

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
const root = document.getElementById('root');

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const { towns } = Object.fromEntries(formData);
    const townsArr = towns.split(', ');
    renderTownList(townsArr);
    form.reset();
}

function renderTownList(data) {
    const result = createTownsList(data);
    render(result, root);
}

function createTownsList(data) {
    const ul = html`
    <ul>
    ${data.map(el => html`<li>${el}</li>`)}
    </ul>`

    return ul;
}