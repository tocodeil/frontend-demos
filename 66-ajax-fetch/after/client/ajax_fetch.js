const serverUrl = 'http://localhost:8080';

class MessagesService {
    constructor() {
        this.token = null;
    }

    async login(username) {
        try {
            const response = await fetch(`${serverUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ username: username }),
                mode: 'cors',
            });
            const data = await response.json();
            this.token = data.token;      
            console.log(`Got token: ${this.token}`);      
        } catch (err) {
            alert("Oops that didn't work: " + err);
        }
    }

    async sendMessage(text, to=null) {
        try {
            const response = await fetch(`${serverUrl}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': this.token,
                  },
                body: JSON.stringify({ text, to }),
                mode: 'cors',
            });
            console.log(`Message sent OK`);      
        } catch (err) {
            alert("Oops that didn't work: " + err);
        }        
    }

    async loadMessages() {
        try {
            const response = await fetch(`${serverUrl}/messages`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': this.token,
                  },
                mode: 'cors',
            });
            const data = await response.json();
            console.log(data);      
        } catch (err) {
            alert("Oops that didn't work: " + err);
        }                
    }
}

const service = new MessagesService();
