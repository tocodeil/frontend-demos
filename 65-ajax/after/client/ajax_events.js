const serverUrl = 'http://localhost:8080';

class MessagesService {
    constructor() {
        this.token = null;
    }

    login(username) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/login`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: username }));

        xhr.addEventListener('load', this.loginComplete.bind(this));
        xhr.addEventListener('error', this.error.bind(this));
    }

    loginComplete(evt) {
        const xhr = evt.target;
        if (xhr.status !== 200) { return this.error(evt) };

        const data = JSON.parse(xhr.responseText);
        this.token = data.token;
        console.log(`Got server token: ${this.token}`);
    }

    sendMessage(text, to=null) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);

        xhr.send(JSON.stringify({ text, to }));

        xhr.addEventListener('load', this.sendMessageComplete.bind(this));
        xhr.addEventListener('error', this.error.bind(this));        
    }

    sendMessageComplete(evt) {
        const xhr = evt.target;
        if (xhr.status !== 201) { return this.error(evt) };

        console.log('Message sent OK');        
    }

    loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);

        xhr.send();

        xhr.addEventListener('load', this.loadMessagesComplete.bind(this));
        xhr.addEventListener('error', this.error.bind(this));        
    }

    loadMessagesComplete(evt) {
        const xhr = evt.target;
        if (xhr.status !== 200) { return this.error(evt) };

        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }

    error(evt) {
        alert('Something went wrong sorry try again');
    }
}

const service = new MessagesService();
