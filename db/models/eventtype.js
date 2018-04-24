'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventType = sequelize.define('EventType', {
    event_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING(45)
  }, {});
  EventType.associate = function(models) {
    // associations can be defined here
      EventType.hasMany(models.Event);
  };
  return EventType;
};