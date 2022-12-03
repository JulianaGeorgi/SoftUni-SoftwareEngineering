document.getElementById('register-form').addEventListener('submit', registerHandler);
document.querySelectorAll('a').forEach(element => element.classList.remove('active')); // making the other buttons inactive
document.getElementById('register').classList.add('active'); // making the Register button active
document.getElementById('user').style.display = 'none';
const errorParagraph = document.querySelector('p.notification');

//getting all the data from the register form & sending it to onRegister
function registerHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password, rePass } = Object.fromEntries(formData.entries());
    
    if (password !== rePass) {
        errorParagraph.textContent = 'Error';
        setTimeout(() => {
            errorParagraph.textContent = ''; // will removed the error after it shows for 1s
        }, 2000);
    } else {
        onRegister(email, password);
    }
}

//sending the data of the user to the server via POST request
async function onRegister(email, password) {
    const url = 'http://localhost:3030/users/register';
    const body = {
        email,
        password
    }
    const header = getHeader("POST", body);

    try {
        const response = await fetch(url, header);
        const data = await response.json();
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
        }, 2000);
    }
}

function getHeader(method, body) {
    return {
        method: `${method}`,
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
}