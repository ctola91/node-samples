const axios = require('axios');

const getPlaceLatLng = async (address) => {
    let encodedUrl = encodeURI(address);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA_uVKWprjIgPURNhl1v9zzTPLQJIBdi6I`);
    
    if(res.data.status === 'ZERO_RESULTS') {
        throw new Error('Not exist results');
    }
    
    let location = res.data.results[0];
    let position = location.geometry.location;

    return {
        address: location.formatted_address, 
        lat: position.lat, 
        lng: position.lng
    }
}

module.exports = {
    getPlaceLatLng
}
