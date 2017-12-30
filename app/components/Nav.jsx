var React = require('react');
var {Link, IndexLink} = require("react-router");

var Nav = () => {
    return (
        <div>
            <h3>Nav component</h3>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
            <Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Example</Link>
            <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link>
        </div>
    );
}

module.exports = Nav; 