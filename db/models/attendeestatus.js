'use strict';
module.exports = (sequelize, DataTypes) => {
  var AttendeeStatus = sequelize.define('AttendeeStatus', {
    attendee_status_id: DataTypes.INTEGER,
    status: DataTypes.STRING(45)
  }, {});
  AttendeeStatus.associate = function(models) {
    // associations can be defined here
      models.AttendeeStatus.hasMany(models.EventAttendee);
      models.EventAttendee.belongsTo(models.AttendeeStatus);
  };
  return AttendeeStatus;
};