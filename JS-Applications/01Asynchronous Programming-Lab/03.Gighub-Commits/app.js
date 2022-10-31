function loadCommits() {
    const username = document.getElementById("username").value;
    const repository = document.getElementById("repo").value;

    fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

}

function handleResponse(response) {
    if (response.ok == false) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

function handleData(data) {
    const commitsParent = document.getElementById("commits");
    commitsParent.textContent = "";
    for (const { commit } of data) {
        const li = document.createElement('li');
        li.textContent = `${commit.author.name}: ${commit.message}`;
        commitsParent.appendChild(li);
    };
}

function handleError(err) {
    const list = document.getElementById('commits');
    list.textContent = `${err.message} (Not Found)`;
}