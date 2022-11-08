// get data from REST service
// parse and display each recipes

import { showDetailsView } from "./details.js";

document.getElementById("recipe-list").addEventListener("click", openRecipe);
document.getElementById("catalog-link").addEventListener("click", showCatalogView);

// shows the catalog view 
export async function showCatalogView() {
    [...document.querySelectorAll("section")].forEach( // hiding all sections
        (s) => (s.style.display = "none")
    );
    const recipes = await getAllRecipes();

    document.getElementById("catalog-view").style.display = "block"; // displaying only the catalog view

    displayRecipes(recipes);
}

// GETs all recipes 
async function getAllRecipes() {
    const response = await fetch(
        "http://localhost:3030/data/recipes?select=" + encodeURIComponent("_id, name")
    );
    const recipes = await response.json();

    return recipes;
}

// displays all recipes 
function displayRecipes(recipes) {
    const cards = recipes.map(createRecipeCard);

    const fragment = document.createDocumentFragment();
    for (let item of cards) {
        fragment.appendChild(item);
    }
    const list = document.getElementById("recipe-list");
    list.replaceChildren(fragment);
}

// sub function of displayRecipes that creates all elements for each recipe 
function createRecipeCard(recipe) {
    const element = document.createElement("li");
    element.textContent = recipe.name;

    const link = document.createElement("a");
    link.href = "javascript:void(0)";
    link.text = "[Details]";
    link.id = recipe._id;
    element.appendChild(link);

    return element;
}

function openRecipe(event) {
    if (event.target.tagName == "A") {
        console.log("link clicked");
        event.preventDefault();
        const id = event.target.id;
        showDetailsView(id);
    }
}