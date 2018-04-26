'use strict';
module.exports = (sequelize, DataTypes) => {
  var GroupFollower = sequelize.define('GroupFollower', {
    group_follower_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  }, {});
  GroupFollower.associate = function(models) {
    // associations can be defined here
    models.Group.belongsToMany(models.User, {through: "GroupFollower", foreignKey: "group_id"});
    models.User.belongsToMany(models.Group, {through: "GroupFollower", foreignKey: "user_id"});

  };
  return GroupFollower;
};