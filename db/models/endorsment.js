'use strict';
module.exports = (sequelize, DataTypes) => {
  var Endorsment = sequelize.define('Endorsment', {
    endorsment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_skill_id: DataTypes.INTEGER
  }, {});
  Endorsment.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(model.UserSkill, { through: "Endorsment", foreignkey: 'user_id' });
    UserSkill.belongsToMany(model.User, { through: "Endorsment", foreignkey: 'user_skill_id' });
  };
  return Endorsment;
};