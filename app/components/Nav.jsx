var React = require('react');
var { Link, IndexLink } = require("react-router");

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        var location = this.refs.search.value;
        var encoded = encodeURIComponent(location);

        if (location && location.length > 0) {
            this.refs.search.value = ''; 
            window.location.hash = '#/?location=' + encoded;
        }
    },

    render: function () {
        return (
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>Weather Check Applaction</li>
                        <li>
                            <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Weather</IndexLink>
                        </li>
                        <li>
                            <Link to='/example' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Example</Link>
                        </li>
                        <li>
                            <Link to='/about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type='search' ref='search' placeholder='Search weather by city' />
                            </li>
                            <li>
                                <input type="submit" className='button' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
