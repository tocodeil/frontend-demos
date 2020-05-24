const serverUrl = 'http://localhost:8080';

class MessagesService {
    constructor() {
        this.token = null;
        this.loginComplete = this.loginComplete.bind(this);
        this.sendMessageComplete = this.sendMessageComplete.bind(this);
        this.loadMessagesComplete = this.loadMessagesComplete.bind(this);
        this.error = this.error.bind(this);
    }

    login(username) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/login`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', this.loginComplete);
        xhr.addEventListener('error', this.error);
        xhr.send(JSON.stringify({ username: username }));
    }

    loginComplete(evt) {
        const xhr = evt.target;
        const data = JSON.parse(xhr.responseText);
        this.token = data.token;
        console.log('Authenticated');
    }

    sendMessage(text, to=null) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);        
        xhr.addEventListener('load', this.sendMessageComplete);
        xhr.addEventListener('error', this.error);
        xhr.send(JSON.stringify({ text: text, to: to }));
    }

    sendMessageComplete(evt) {
        console.log('Message Sent');
    }

    loadMessages() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${serverUrl}/messages`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('token', this.token);        
        xhr.addEventListener('load', this.loadMessagesComplete);
        xhr.addEventListener('error', this.error);
        xhr.send();

    }

    loadMessagesComplete(evt) {
        const xhr = evt.target;
        const messages = JSON.parse(xhr.responseText);
        console.log(messages);
    }

    error(evt) {
        console.log('Error');
        console.dir(evt);
    }
}

const service = new MessagesService();
