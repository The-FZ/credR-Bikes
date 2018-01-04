var React = require('react');
var createReactClass = require('create-react-class');
var axios = require('axios');

var RenderMaps = require('RenderMaps');

var Maps = createReactClass({
  getInitialState:function(){
    return {
      currentLocations:[]
    };
  },

  componentDidMount:function(){
    var self = this;
    var URL = 'https://api.credr.com/v1/product/search/?format=json&q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9';
    axios.get(URL).
    then(function(response){
      var data = response.data.payload.results;
      var allLocations=[];
      data.forEach(item=>{
        allLocations.push(item.current_location_name);
      });
      var mySet = new Set(allLocations);
      var finalLocations = [];
      for(let i of mySet){
        finalLocations.push(i);
      };

      finalLocations.forEach(location=>{
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
          params:{
            address:location,
            key:'AIzaSyA6w6Q_85plnye9bpyu7OMLnWd28C4quuo'
          }
        }).
        then(function(response){
          var lat = response.data.results[0].geometry.location.lat;
          var lng = response.data.results[0].geometry.location.lng;
          var locs={
            location:location,
            coords:{
              lat:lat,
              lng:lng
            }
          };

            self.setState(prevState=>({
              currentLocations:[...prevState.currentLocations,locs]
            }));
        });
      });
    });
  },

  render:function(){
    return (
      <div>
        <h1 className='heading'>Location of Bikes</h1>
        <RenderMaps
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`,width:`700px`,margin:`0 auto`,border:`1px solid #666` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers ={this.state.currentLocations}
        center = {{ lat: 19.0759837, lng: 72.8776559 }}
        zoom ={10}
        isMarkerShown
         />
      </div>
    );
  }
});

module.exports = Maps;
