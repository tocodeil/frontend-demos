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
            // Because await - Starting line 17 will only happen AFTER server response
            // (as if it was written in another function)
            const data = await response.json();
    
            // Because await - we start a "new" function
            this.token = data.token;
            console.log(data.token);    
        } catch (err) {
            console.log(err);
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
                body: JSON.stringify({ to, text }),
                mode: 'cors',
            });
            // Because await - Starting line 17 will only happen AFTER server response
            // (as if it was written in another function)  
            console.log("Message sent");
        } catch (err) {
            console.log(err);
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
            // Because await - Starting line 17 will only happen AFTER server response
            // (as if it was written in another function)  
            const data = await response.json();
            console.log(data);
    
        } catch (err) {
            console.log(err);
        }          
    }
}

const service = new MessagesService();
