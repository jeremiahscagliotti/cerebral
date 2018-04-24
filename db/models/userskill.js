'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSkill = sequelize.define('UserSkill', {
    user_skill_id: DataTypes.INTEGER,
    is_endorsed: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER
  }, {});
  UserSkill.associate = function(models) {
    // associations can be defined here
  };
  return UserSkill;
};