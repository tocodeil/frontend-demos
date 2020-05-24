# Async Communication with Fetch API

1. async / await concept  

  async function login() {
    // BEFORE ...
    const res = await fetch('/login');    

    // AFTER ...
    console.log(res);
  }
  

2. Demo time:
  - Creating the messages service using async/await



Snippets:

Start Node.JS server (from server directory):
> node server.js

Start http-server (from client directory):
> http-server -p 9090 -c-1


Fetch API

        const response = await fetch(`${serverUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ username: username }),
            mode: 'cors',
        });
