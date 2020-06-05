const serverUrl = 'http://localhost:8080';

async function doFetch(url, method, body=null, token=null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            token: token,
        },
        mode: 'cors',
    };
    if (body) {
        options.body = body;
    }

    const response = await fetch(url, options);
    if (response.headers.get('content-type').startsWith('application/json')) {
        const data = await response.json();
        return data;
    }
}

function getJSON(url, token=null) {
    return doFetch(url, 'GET', null, token);
}

function postJSON(url, json, token=null) {
    return doFetch(url, 'POST', JSON.stringify(json), token);
}

class MessagesService {
    constructor() {
        this.token = null;
    }

    async login(username) {
        const data = await postJSON(`${serverUrl}/login`, { username: username });
        this.token = data.token;
    }

    async sendMessage(text, to=null) {
        await postJSON(`${serverUrl}/messages`, { text, to }, this.token);
        console.log('Sent');
    }

    async loadMessages() {
        try {
          const data = await getJSON(`${serverUrl}/messages`, this.token);
          return data;
        } catch (err) {
            console.log("Error: ", err);
        }
    }
}
