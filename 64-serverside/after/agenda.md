# Client / Server Communication

1. What Does a Server Do?
  - Communicate between multiple users in our app
  - Ynet - writers / readers
  - Zap - seller / buyers
  - Facebook
  - Connect multiple browsers
  
2. HTTP Request / Response
  GET /items
  POST /users

3. Demo: A Node.JS Server
  - (GET)  curl localhost:8080/users
  - (POST) curl -H "Content-Type: application/json" -d '{ "name" : "jim" }' localhost:8080/users

4. To run on your machine
  - Download and install node.js from here:
    https://nodejs.org/en/download/

  - Enter the demo folder and type in CMD (only once to install):
    npm install

  - Enter the demo folder and type in CMD:
    node server.js
