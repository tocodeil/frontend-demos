# Client / Server Communication

1. What Does a Server Do?
  * Connect multiple users
  * ZAP -> publish ads / buy products
  * ynet -> writers / readers
  * facebook -> users / users

  * manage huge data


2. HTTP Request / Response
  Client -------> HTTP ------------> Browser
           GET /contact-form
           POST /login 



3. Demo: A Node.JS Server
  - (GET) curl localhost:8080/users
  - (POST) curl -H "Content-Type: application/json" -d "{ \"name\" : \"jim\" }" localhost:8080/users


4. To run on your machine
  - Download and install node.js from here:
    https://nodejs.org/en/download/

  - Enter the demo folder and type in CMD (only once to install):
    npm install

  - Enter the demo folder and type in CMD:
    node server.js
  
