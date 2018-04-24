'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define('Skill', {
    skill_id: DataTypes.INTEGER,
    name: DataTypes.STRING(255)
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
  };
  return Skill;
};