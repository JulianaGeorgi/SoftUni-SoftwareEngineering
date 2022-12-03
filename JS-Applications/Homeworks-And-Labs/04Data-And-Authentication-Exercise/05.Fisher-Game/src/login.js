document.getElementById('login-form').addEventListener('submit', onLogin);
document.querySelectorAll('a').forEach(x => x.classList.remove('active')); // making the other buttons inactive 
document.getElementById('login').classList.add('active');
document.getElementById('user').style.display = 'none';

const errorParagraph = document.querySelector('p.notification');

async function onLogin(event) {
    event.preventDefault(); // because the submit provokes a refresh 
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData.entries());

    //sending the data from the login form to the server
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok == false) {
            throw new Error(data.message);
        }

        const userData = {
            email: data.email,
            id: data._id,
            accessToken: data.accessToken,
        };

        sessionStorage.setItem('userdata', JSON.stringify(userData));
        window.location = './index.html'; // sending the user to the home page

    } catch (error) {
        errorParagraph.textContent = error;
        setTimeout(() => {
            errorParagraph.textContent = '';
        }, 2000);
    }
}