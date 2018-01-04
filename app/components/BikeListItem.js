var React = require('react');
var Avatar = require('Avatar');
var Stats = require('Stats');

var BikeListItem=({bike})=>{
  return (
    <div className='bikeListItem'>
      <Avatar avatar={bike.image} name={bike.display_name}/>
      <Stats bike={bike}/>
    </div>
  );
}

module.exports = BikeListItem;
