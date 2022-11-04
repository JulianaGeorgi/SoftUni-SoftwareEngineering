document.getElementById('register-form').addEventListener('submit', formHandler);
document.querySelectorAll('a').forEach(x => x.classList.remove('active')); // making the other buttons inactive 
document.getElementById('register').classList.add('active');
const errorParagraph = document.querySelector('p.notification');
document.getElementById('user').style.display = 'none';

function formHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password, rePass } = Object.fromEntries(formData.entries());
    if (password !== rePass) {
        errorParagraph.textContent = 'Error';
        setTimeout(() => {
            errorParagraph.textContent = '';
        }, 1000);
    } else {
        onRegister(email, password);
    }
}

async function onRegister(email, password) {
    const url = 'http://localhost:3030/users/register';
    const body = {
        email,
        password
    }
    const header = getHeader("POST", body);

    try {
        const response = await fetch(url, header);
        const data = response.json();
        if(data.code !== 200){
            throw new Error(data.message);
        }

        const userData = {
            email: data.email,
            id: data._id,
            accessToken: data.accessToken,
        };
        sessionStorage.setItem('userdata', JSON.stringify(userData));
        window.location = './index.html';
        return data;
        
    } catch (error) {
        errorParagraph.textContent = error;
        setTimeout(() => {
            errorParagraph.textContent = '';
        }, 1000);
    }
}

function getHeader(method, body) {
    return {
        method: `${method}`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    }
}