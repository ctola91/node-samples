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

let getInfo = async (address) => {
    try {
        let position = await place.getPlaceLatLng(address);
        let temp = await weather.getWeather(position.lat, position.lng);
        return `The weather in ${position.address} is ${temp}`;
    } catch (e) {
        return `It is not posible to determinate the weather on ${address}`
    }
}

getInfo(argv.address)
.then(message => console.log(message))
.catch(err => console.log(err));