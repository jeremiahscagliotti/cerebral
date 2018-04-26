'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventAttendee = sequelize.define('EventAttendee', {
    event_attendee_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  EventAttendee.associate = function(models) {
    // associations can be defined here
      models.Event.belongsToMany(models.User, {through: "EventAttendee", foreignKey: "event_id"});
      models.User.belongsToMany(models.Event, {through: "EventAttendee", foreignKey: "user_id"});
  };
  return EventAttendee;
};