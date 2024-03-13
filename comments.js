// Create web server 

// Import the express module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments.json');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});