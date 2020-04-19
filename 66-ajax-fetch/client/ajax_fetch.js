const serverUrl = 'http://localhost:8080';

class MessagesService {
    constructor() {
        this.token = null;
        this.onHasNewMessages = function(messages) { console.log(messages)};
        this.onAuthenticated = function() { console.log('Authenticated' )};
    }

    async login(username) {
        const response = await fetch(`${serverUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ username: username }),
            mode: 'cors',
        });
        const json = await response.json();
        this.token = json.token;
        this.onAuthenticated();
    }

    async sendMessage(text, to=null) {
        await fetch(`${serverUrl}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: this.token,
              },
            body: JSON.stringify({ text, to }),
            mode: 'cors',
        });
        console.log('Sent');
    }

    async loadMessages() {
        const response = await fetch(`${serverUrl}/messages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                token: this.token,
              },
            mode: 'cors',
        });
        const data = await response.json();
        this.onHasNewMessages(data);
    }
}

const service = new MessagesService();