'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventGroup = sequelize.define('EventGroup', {
    event_group_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {});
  EventGroup.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.Group, {through: "EventGroup", foreignKey: "event_id"});
    Group.belongsToMany(models.Event, {through: "EventGroup", foreignKey: "group_id"});
  };
  return EventGroup;
};