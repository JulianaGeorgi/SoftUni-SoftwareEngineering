const host = 'http://localhost:3030/';

async function requester(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }
        try {

            if (response.status === 204) {
                return response;
            }
            const data = await response.json();
            return data;
            
        } catch (error) {
            alert(error.message);
            return error;
        }

    } catch (error) {
        alert(error.message);
        return error;
    }
}

function getOption(method, body) {
    const options = {
        method,
        headers: {}
    }

    const user = JSON.parse(sessionStorage.getItem('userData'));
    const token = user.accessToken;
    if (user) {
        options.headers['X-Authorization'] = token;
    }
    if (body) {
        options.headers['Content-Type'] = 'Application/json';
        options.body = JSON.stringify(body);
    }
    return options;
}

export async function get(url) {
    return await requester(url, getOption('GET'));
}

export async function post(url, data) {
    return await requester(url, getOption('POST', data));
}

export async function put(url, data) {
    return await requester(url, getOption('PUT', data));
}

export async function del(url) {
    return await requester(url, getOption('DELETE'));
}