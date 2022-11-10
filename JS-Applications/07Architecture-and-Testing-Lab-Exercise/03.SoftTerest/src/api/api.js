const host = 'http://localhost:3030/';

async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const options = {
        method,
        headers: {}
    }



    if (data) { // if there is no data, the method is GET
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            if (response.status === 403) { // we are not logged in, but we have auth token
                sessionStorage.removeItem('user');
            }
            const err = await response.json();
            throw new Error(err.message); // passing  it to the catch
        }

        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error; // to stop the code from executing further
    }
}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del as delete
}