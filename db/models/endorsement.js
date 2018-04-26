'use strict';
module.exports = (sequelize, DataTypes) => {
  var Endorsement = sequelize.define('Endorsement', {
    endorsement_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    user_skill_id: DataTypes.INTEGER
  }, {});
  Endorsement.associate = function(models) {
    // associations can be defined here
      models.User.belongsToMany(models.UserSkill, { through: "Endorsement", foreignkey: 'user_id' });
      models.UserSkill.belongsToMany(models.User, { through: "Endorsement", foreignkey: 'user_skill_id' });
  };
  return Endorsement;
};