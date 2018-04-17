'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    location_id: DataTypes.INTEGER,
    address: DataTypes.STRING(100),
    city: DataTypes.STRING(45),
    state: DataTypes.STRING(2),
    country: DataTypes.STRING(2)
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};