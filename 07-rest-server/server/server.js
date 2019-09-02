const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/user', (req, res) => {
    res.json('get User');
});

app.post('/user', (req, res) => {
    let body = req.body;
    
    res.json({person: body});
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;

    res.json({id});
});

app.delete('/user/:id', (req, res) => {
    res.json('delete User');
});

app.listen(3000, () => {
    console.log('Listen port: ', 3000);
})