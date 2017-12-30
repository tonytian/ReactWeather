var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState() {
        return {isLoading: false };
    }, 
    handleSearch: function(location){
        var that = this; 
        
        OpenWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location, 
                tempture: temp, 
                isLoading: false
            }); 
        }, function(error) {
            that.setState({
                isLoading: false
            }); 
            alert(error);
        });
    }, 

    renderMessage: function() {
        var {isLoading, location, tempture} = this.state; 
        if (this.state.isLoading){
            return (<h3>Loading data ...</h3>)
        }else if (location && tempture) {
            return <WeatherMessage location={location} tempture={tempture}/>
        }
    },

    render: function() {
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {this.renderMessage()}
            </div>
        );
    }
});

module.exports = Weather; 