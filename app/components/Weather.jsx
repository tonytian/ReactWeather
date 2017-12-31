var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState() {
        return {
            isLoading: false,
            errorMessage: undefined
        };
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
                isLoading: false, 
                errorMessage: error.message
            }); 
        });
    }, 

    render: function() {
        var {isLoading, tempture, location, errorMessage } = this.state; 
        
        var renderError = function () {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage} title='Error' ></ErrorModal>
                )
            }
        }
    
        var renderMessage = function() { 
            if (isLoading){
                return (<h3>Loading data ...</h3>)
            }else if (location && tempture) {
                return <WeatherMessage location={location} tempture={tempture}/>
            }
        }

        return (
            <div>
                <h1 className='text-center'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather; 