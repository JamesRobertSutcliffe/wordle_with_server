const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

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

app.all('/api', (req, res) => {
    scores.push(req.body);
    res.json(scores);
});

app.listen(5000, () => {
    console.log("Server connected to port 5000")
})