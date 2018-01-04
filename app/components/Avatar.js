var React = require('react');

var Avatar = ({avatar,name}) =>{
  return (
    <div className='avatar'>
      <img src={avatar.vehicle_images[0].image} alt={name}/>
    </div>
  );
};

module.exports = Avatar;
