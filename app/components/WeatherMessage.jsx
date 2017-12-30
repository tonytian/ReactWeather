var React = require('react');

var WeatherMessage = ({tempture, city}) => {
    return (<h3>The tempture in {city} is {tempture} currently. </h3>);
}

module.exports = WeatherMessage; 