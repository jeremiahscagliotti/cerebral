'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    event_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    host_id: DataTypes.INTEGER,
    link: DataTypes.TEXT,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
      Event.belongsTo(models.User);
  };
  return Event;
};