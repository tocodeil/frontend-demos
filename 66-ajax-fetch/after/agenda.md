# Async Communication with Fetch API

1. async / await concept


async function login() {
  try {
    const x = 10;
    const res = await fetch('...');
    const data = await res.json();
    this.token = data.token;
  } catch (err) {
    alert('Login failed: ' + err);
  }

}

2. Demo time:
  - Creating the messages service using async/await


3. Fetch API Snippet:

```
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
```