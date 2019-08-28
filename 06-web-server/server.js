const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     let result = {
//         name: 'Chris',
//         age: '28',
//         url: req.url
//     }

//     res.send(result);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))