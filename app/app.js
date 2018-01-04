var React = require('react');
var ReactDOM = require('react-dom');
var {BrowserRouter, Route, Switch} = require('react-router-dom');

var CredRmain = require('CredRmain');
var Navbar = require('Navbar');
var About = require('About');
var Maps = require('Maps');

//custom scss
require('style-loader!css-loader!sass-loader!applicationStyles');
//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

var App = () =>{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path ='/' component={Navbar}/>
          <div>
            <Switch>
              <Route path ='/about' component={About}/>
              <Route path ='/maps' component={Maps}/>
              <Route path ='/' component={CredRmain}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
};


ReactDOM.render(<App/>,document.getElementById('app'));
