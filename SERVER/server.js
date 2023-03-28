const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//initial dummy scores of API//
const scores = [
    {
        "name": "James",
        "guesses": "5",
        "solution": "CHIPS"
    },
    {
        "name": "Sarah",
        "guesses": "2",
        "solution": "PEASE"
    }
]


//Express function that sorts POST requests//
app.all('/api', (req, res) => {
    scores.push(req.body);
    res.json(scores);
});


//Express function setting server location//
app.listen(5000, () => {
    console.log("Server connected to port 5000")
})