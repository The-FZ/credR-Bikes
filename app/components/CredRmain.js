var React = require('react');
var createReactClass =  require('create-react-class');
var axios = require('axios');

var BikeList = require('BikeList');
var Loading = require('Loading');

var CredRmain = createReactClass({
getInitialState:function(){
  return {
    allBikes:[]
  }
},

componentDidMount:function(){
  this.getAllBikes();
},

getAllBikes:function(){
  var that = this;
  var dataURL = 'https://api.credr.com/v1/product/search/?format=json&q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9';
  axios.get(dataURL).
  then(function(response){
    that.setState({
      allBikes:[...response.data.payload.results]
    });
  });
},

render:function(){
  var renderBikes=()=>{
    if(this.state.allBikes.length===0){
        return <Loading/>;
    }
    else{
        return <BikeList bikeList = {this.state.allBikes}/>;
    }
  }
  return (
    <div>
      <h1 className='heading'>Bikes</h1>
      {renderBikes()}
    </div>
  );
}
});

module.exports = CredRmain;
