import { showDetails } from './details.js';

const section = document.getElementById("homeView");
const main = document.getElementsByTagName("main")[0]; // the main children are the two sections - home and details view 
const form = document.querySelector("#homeView form");
form.addEventListener("submit", onSubmit);
const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

console.log('before');
section.remove(); // removing the home view 

export async function showHome() {

    console.log('show')
    const topicContainer = section.querySelector(".topic-title"); // selecting the whole topics section that's part of the home view

    const posts = await loadPost(); // receiving all the existing posts after a GET request
    const content = Object.values(posts).map(x => topicTemplate(x)); // getting all posts in an array of divs with class topic-container
    topicContainer.replaceChildren(...content); // replacing the whole topics section with all topics
    main.replaceChildren(section);
}

// creating each topic 
function topicTemplate(data) { // receives an object with the existing posts' data from the GET request 
    const container = document.createElement("div"); // creating a rectangle for each post 
    container.classList.add("topic-container"); // adding each a class "topic-container"
    container.innerHTML = `
    <div class="topic-name-wrapper" >
        <div class="topic-name">
        <a href="#" class="normal" id="${data._id}">
            <h2>${data.topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${data.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${data.username}</span></p>
                </div>
            </div>
        </div>
        </div>
    </div>`;

    container.querySelector("a").addEventListener("click", showDetails); // adding an event listener where the topic title is, the whole area
    return container;
}


// collecting all the data from the form and sending it to make a POST request 
function onSubmit(e) {
    e.preventDefault();
    if (e.submitter.innerHTML === "Cancel") {
        return clearForm()
    }
    const formData = new FormData(form);
    const { topicName, username, postText } = Object.fromEntries(formData);

    createPost({ topicName, username, postText, date: new Date() });
    clearForm();
}

function clearForm() {
    form.reset();
}

// making a POST request with the data from the form 
async function createPost(body) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        const data = await response.json();
        if (!response.ok) {
            const error = data.message;
            throw new Error(error);
        }
        showHome();
    } catch (error) {
        alert(error.message);
    }

}

// making a GET request to get the existing posts with their postText, topicName, username, _id
async function loadPost() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            const err = response.message;
            throw new Error(err);
        }
        return data;
    } catch (err) {
        alert(err.message);
    }
}

showDetails()