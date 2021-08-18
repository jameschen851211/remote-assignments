//Assignment 1: Your First Web Server

const express = require('express');

const app = express()

const port = 3001

app.get('/', (req, res) => {
    res.send('hello, My Server!')
});

app.listen(port, () => {
    console.log(`http listening at port ${port}`)
})


//Assignment 2

app.get('/getData?', (req, res) => {
    var result;
    if ((req.query.number) == undefined) {
        res.send("Lack of Parameter")
        return
    }
    if (isNaN(req.query.number)) {
        result = 'Wrong Parameters'
    } else {
        result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
    }
    res.send(`${result}`)


}
)
