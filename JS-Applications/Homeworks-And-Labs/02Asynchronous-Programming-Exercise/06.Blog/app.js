function attachEvents() {

    document.getElementById("btnLoadPosts").addEventListener("click", getPosts);

    const viewPostBtn = document.getElementById("btnViewPost");
    const select = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    async function getPosts() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
            const postsData = await response.json(); // receiving an object of objects

            // // adding each post to the dropdown menu
            for (let key in postsData) {
                const option = document.createElement('option');
                option.value = key; // using the key of each object from the parent object 	
                option.textContent = postsData[key].title; // using the current object title property as text inside the node 
                select.appendChild(option);
            }
            viewPostBtn.addEventListener("click", () => getComments(postsData));

        } catch (error) {
            console.log(error.message);
        }
    }

    async function getComments(postsData) {
        try {
            const selectedPostID = select.value;
            const selectedPostTitle = select.options[select.selectedIndex].text;
            const selectedPostContent = postsData[selectedPostID].body;

            const response = await fetch('http://localhost:3030/jsonstore/blog/comments'); // getting all comments for all posts 
            const allComments = await response.json();

            // need to match the selectedPostID with postID of the comments 
            const selectedPostComments = Object
                .values(allComments)
                .filter(obj => selectedPostID === obj.postId);

            postTitle.textContent = selectedPostTitle;
            postContent.textContent = selectedPostContent;

            selectedPostComments.forEach(comment => { // adding the comments 
                const li = document.createElement('li');
                li.id = comment.id;
                li.textContent = comment.text;
                postComments.appendChild(li);
            });
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();