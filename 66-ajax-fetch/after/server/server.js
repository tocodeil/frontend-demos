const express = require('express');
const bodyParser = require('body-parser')
const crypto = require('crypto');

const app = express();
const publicMessages = [{ text: 'Hello World!', from: 'SYSTEM' }];
const privateMessages = {};

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    next();
});

const users = {};

app.post('/login', function(req, res) {
    const user = req.body.username;
    crypto.randomBytes(48, function(err, buf) {
        const token = buf.toString('hex');
        users[token] = user;
        res.send({ token: token });
        console.log(`User ${user} Authenticated`);
    });
});

function verifyUser(req, res, next) {
    const token = req.headers.token;
    const user = users[token];
    if (!user) { return next('Access Denied') }
    req.user = user;

    next();
}

app.post('/messages', verifyUser, function(req, res, next) {
    const message = req.body;
    message.from = req.user;
    if (message.to) {
        if (!privateMessages[message.to]) {
            privateMessages[message.to] = [];
        }

        const userMessages = privateMessages[message.to];
        userMessages.push(message);
    } else {
        publicMessages.push(message);
    }
    res.sendStatus(201);
});

app.get('/messages', verifyUser, function(req, res) {
    const myMessages = privateMessages[req.user] || [];
    res.send(publicMessages.concat(myMessages));
});

app.listen(8080);