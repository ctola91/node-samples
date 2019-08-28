const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    let result = {
        name: 'Chris',
        age: '28',
        url: req.url
    }

    res.write(JSON.stringify(result));
    res.end();
})
.listen(8080);

console.log('listen port 8080');