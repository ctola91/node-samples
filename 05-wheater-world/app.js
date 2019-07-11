const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'city address',
        demand: true
    }
}).argv;

console.log(argv);