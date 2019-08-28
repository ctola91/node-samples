const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Christian',
        year: new Date().getFullYear()
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))