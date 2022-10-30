// function loadCommits() {

//     const username = document.getElementById("username").value;
//     const repository = document.getElementById("repo").value;

//     fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
//         .then(handleResponse)
//         .then(handleData)
//         .catch(handleError);

// }

// function handleResponse(response) {
//     console.log(response);
//     if (response.ok == false) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     return response.json();
// }

// function handleData(data) {
//     const commitsParent = document.getElementById("commits");
//     commitsParent.textContent = "";
//     for (const { commit } of data) {
//         const li = document.createElement('li');
//         li.textContent = `${commit.author.name}: ${commit.message}`;
//         commitsParent.appendChild(li);
//     };
// }

// function handleError(err) {
//     const list = document.getElementById('commits');
//     list.textContent = `${err.message} (Not Found)`;
// }

// loadCommits();
async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const list = document.getElementById('commits');

    try {
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

        if (!res.ok) {
            throw new Error(`${res.status} (${res.statusText})`);
        }

        const commits = await res.json();

        list.innerHTML = '';
        for (const { commit } of commits) {
            list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;
        }
    } catch (error) {
        list.innerHTML = `<li>Error: ${error.message}</li>`;
    }
}