const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const users = [ { name: 'bob'}, { name: 'bill' } ];

app.post('/users', function(req, res) {
    users.push(req.body);
    console.log(req.body);
    console.log(req.headers);
    res.sendStatus(201);
});

app.get('/users', function(req, res) {
    res.send({ users: users });
});

app.listen(8080);