'use strict';
module.exports = (sequelize, DataTypes) => {
  var LocationType = sequelize.define('LocationType', {
    location_type_id: DataTypes.INTEGER,
    location_type: DataTypes.STRING(45)
  }, {});
  LocationType.associate = function(models) {
    // associations can be defined here
  };
  return LocationType;
};