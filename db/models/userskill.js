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
      UserSkill.belongsTo(models.User, {foreignKey: 'user_id'});
      UserSkill.hasMany(models.Skill, {foreignKey: 'skill_id'});
  };
  return UserSkill;
};