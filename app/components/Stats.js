var React = require('react');

var Name = require('Name');
var Registration = require('Registration');
var DistanceDriven = require('DistanceDriven');
var MfgYear = require('MfgYear');
var Age = require('Age');
var Price = require('Price');


var Stats =({bike}) =>{
  return (
    <div className='stats'>
      <div className='statsData'>
        <Name name={bike.display_name}/>
        <Registration regNo={bike.registration_number}/>
        <MfgYear mfgYr={bike.year_of_mfg}/>
        <Age age={bike.years_old}/>
        <DistanceDriven kms={bike.kms_driven}/>
        <Price price={bike.display_price}/>
      </div>
    </div>
  );
};

module.exports = Stats;
