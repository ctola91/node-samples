const axios = require('axios');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'city address',
        demand: true
    }
}).argv;

console.log(argv);

let encodedUrl = encodeURI(argv.address);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I`)
    .then(res => {
        let location = res.data.results[0];
        let position = location.geometry.location;

        console.log('ADDRESS: ', location.formatted_address);
        console.log('LNG: ', position.lat);
        console.log('LAT: ', position.lat);
    })
    .catch( e => console.log('ERROR!!!: ', e))