var React = require('react');
var createReactClass = require('create-react-class');
var { withScriptjs,withGoogleMap, GoogleMap, Marker} = require('react-google-maps');

var RenderMaps = (props) =>{
    var renderMarkers=()=>{
      if(props.markers.length===2){
        var marks = [];
        props.markers.forEach((marker,index)=>{
          marks.push(<Marker key={index} position={marker.coords}/>)
        })
        return marks;
      }
    };

    return (
      <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}>
      {renderMarkers()}
      </GoogleMap>
  );
}

module.exports = withScriptjs(withGoogleMap(RenderMaps));
