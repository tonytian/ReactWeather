var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.cityField.value; 
        
        if(location.length > 0){
            this.refs.cityField.value = ''; 
            this.props.onSearch(location);
        }
        console.log('searching city!');
    }, 

    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref='cityField' type="text"/>
                    <button className='button expanded hollow'>Search Weather</button>
                </form>
            </div>
        )
    }
}); 

module.exports = WeatherForm; 