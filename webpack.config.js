const path = require('path');

module.exports = {
  entry:[
    './app/app.js'],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    alias:{
      CredRmain:path.resolve(__dirname,'./app/components/CredRmain.js'),
      Loading:path.resolve(__dirname,'./app/components/Loading.js'),
      Navbar:path.resolve(__dirname,'./app/components/Navbar.js'),
      BikeList:path.resolve(__dirname,'./app/components/BikeList.js'),
      BikeListItem:path.resolve(__dirname,'./app/components/BikeListItem.js'),
      Avatar:path.resolve(__dirname,'./app/components/Avatar.js'),
      Stats:path.resolve(__dirname,'./app/components/Stats.js'),
      Name:path.resolve(__dirname,'./app/components/Name.js'),
      Registration:path.resolve(__dirname,'./app/components/Registration.js'),
      MfgYear:path.resolve(__dirname,'./app/components/MfgYear.js'),
      Age:path.resolve(__dirname,'./app/components/Age.js'),
      DistanceDriven:path.resolve(__dirname,'./app/components/DistanceDriven.js'),
      Price:path.resolve(__dirname,'./app/components/Price.js'),
      Maps:path.resolve(__dirname,'./app/components/Maps.js'),
      RenderMaps:path.resolve(__dirname,'./app/components/RenderMaps.js'),
      About:path.resolve(__dirname,'./app/components/About.js'),
      applicationStyles:path.resolve(__dirname,'./app/styles/app.scss')
    },
    extensions:[' ', '.js', '.jsx', '.css', '.scss']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015', 'react', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
};
