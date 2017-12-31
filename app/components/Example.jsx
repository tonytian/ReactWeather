var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className='text-center page-title'>Expample</h1>
            <p>Here are a few example to try out: </p>
            <ol>
                <li>
                    <Link to='/?location=Christchurch'>Christchurch, NZ</Link>
                </li>
                <li>
                    <Link to='/?location=Christchurch'>Shijiazhuang, China</Link>
                </li>
            </ol>
        </div>
    );
}
module.exports = Example; 
