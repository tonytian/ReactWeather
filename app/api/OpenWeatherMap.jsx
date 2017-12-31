var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=2de6804e7deec8f9a42ee2505183fad6&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else {
                return res.data.main.temp; 
            }
        }, function(err){
            throw new Error('Can not fetch weather for the given location:' + location + '!');
        })
    }
}