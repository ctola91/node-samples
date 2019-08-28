const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'city address',
        demand: true
    }
}).argv;

console.log(argv);

place.getPlaceLatLng(argv.address)
    .then(res => console.log(res));

weather.getWeather(9.98, 9.98)
    .then(res => console.log(res))
    .catch(err => console.log(err));