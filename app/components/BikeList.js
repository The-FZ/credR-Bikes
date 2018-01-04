var React = require('react');
var BikeListItem = require('BikeListItem');

var BikeList=({bikeList})=>{

  return (
    <div className='bike-list'>
      {
        bikeList.map(bike=>{
          return <BikeListItem key = {bike.vehicle_id} bike={bike}/>
        })
      }
    </div>
  );
};

module.exports = BikeList;
