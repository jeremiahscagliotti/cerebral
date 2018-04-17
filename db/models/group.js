'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    group_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};