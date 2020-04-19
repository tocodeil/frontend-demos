const serverUrl = 'http://localhost:8080';

class MessagesService {
    constructor() {
        this.token = null;
        this.onHasNewMessages = function(messages) { console.log(messages)};
        this.onAuthenticated = function() { console.log('Authenticated' )};

        this.authenticated = this.authenticated.bind(this);
        this.parseNewMessages = this.parseNewMessages.bind(this);
        this.sendMessageComplete = this.sendMessageComplete.bind(this);
    }

    sendMessageComplete(evt) {
        console.log(evt.target.status);
    }

    authenticated(evt) {
        const xhr = evt.target;
        if (xhr.status !== 200) {
            console.log(`login failed: ${xhr.responseText}`);
            return;
        }

        const response = JSON.parse(xhr.responseText);
        this.token = response.token;
        this.onAuthenticated();
    }

    parseNewMessages(evt) {
        const xhr = evt.target;
        if (xhr.status !== 200) {
            console.log(`Load failed: ${xhr.responseText}`);
            return;
        }

        const response = JSON.parse(xhr.responseText);
        this.onHasNewMessages(response);
    }

    login(username) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/login`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: username }));
        xhr.addEventListener('load', this.authenticated);
    }

    sendMessage(text, to=null) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);
        xhr.send(JSON.stringify({ text, to }));
        xhr.addEventListener('load', this.sendMessageComplete);
    }

    loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);
        xhr.addEventListener('load', this.parseNewMessages);
        xhr.send();
    }
}

const service = new MessagesService();