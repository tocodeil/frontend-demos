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

async function getJSON(url, token=null) {
    return await doFetch(url, 'GET', null, token);
}

async function postJSON(url, json, token=null) {
    return await doFetch(url, 'POST', JSON.stringify(json), token);
}

class MessagesService {
    constructor() {
        this.token = null;
        this.onHasNewMessages = function(messages) { console.log(messages)};
        this.onAuthenticated = function() { console.log('Authenticated' )};
    }

    async login(username) {
        const data = await postJSON(`${serverUrl}/login`, { username: username });
        this.token = data.token;
        this.onAuthenticated();
    }

    async sendMessage(text, to=null) {
        await postJSON(`${serverUrl}/messages`, { text, to }, this.token);
        console.log('Sent');
    }

    async loadMessages() {
        try {
            const data = await getJSON(`${serverUrl}/messages`, this.token);
            this.onHasNewMessages(data);
        } catch (err) {
            console.log("Error: ", err);
        }
    }
}
