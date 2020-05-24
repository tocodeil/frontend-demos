# Client / Server Ajax

1. XMLHttpRequest and events
  Verb (GET / POST) + Path (/users) + Request Body ({ name: 'jim', email: 'jim@gmail.com' })
  Request Headers (Content-Type: application/json)

  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', handleLoad);
  xhr.addEventListener('error', handleError);
  xhr.send(requestBody);

2. CORS and File:// url restrictions
  - Running our code in a localhost:// server
  - npm install --global http-server
  - In the "client" folder run: 
    http-server -p 9090 -c-1

2. Demo Time - Server API

3. Demo Time - Client Code
  - Login
  - Get new messages
  - Send a message

