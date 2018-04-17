'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserGroup = sequelize.define('UserGroup', {
    user_group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    is_admin: DataTypes.BOOLEAN
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Group, {through: "UserGroup", foreignKey: "user_id"});
    Group.belongsToMany(models.User, {through: "UserGroup", foreignKey: "group_id"});
  };
  return UserGroup;
};