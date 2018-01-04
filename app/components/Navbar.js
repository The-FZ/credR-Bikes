var React = require('react');
var {NavLink} = require('react-router-dom');

var Navbar =()=>{
  var style = {
    backgroundColor:'inherit',
    color:'#fff',
    fontWeight:'bold',
    textDecoration:'underline'
  }
  return (
      <div className='navbar'>
      <div className='navbar-menu'>
        <ul>
          <li className='menu-logo'><img src='https://d1qb2nb5cznatu.cloudfront.net/startups/i/690668-a8d7e8c079d2631e1cc6ff7a5a305cc1-medium_jpg.jpg' alt='credR'/></li>
          <li><NavLink to='/bikeList' activeClassName='active' activeStyle={style}>Bikes</NavLink></li>
          <li><NavLink to='/maps' activeClassName='active' activeStyle={style}>Maps</NavLink></li>
          <li><NavLink to='/about' activeClassName='active' activeStyle={style}>About</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navbar;
