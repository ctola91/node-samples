const axios = require('axios');

const getWeather = async (lat, lng) => {
    let res = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=testkey`);

    return res.data.main.temp;
}

module.exports = {
    getWeather
}