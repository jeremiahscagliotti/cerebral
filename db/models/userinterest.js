'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserInterest = sequelize.define('UserInterest', {
    user_interest_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER
  }, {});
  UserInterest.associate = function(models) {
    // associations can be defined here
    models.User.belongsToMany(models.Interest, { through: "UserInterest", foreignkey: 'user_id' });
    models.Interest.belongsToMany(models.User, { through: "UserInterest", foreignkey: 'interest_id' });
  };
  return UserInterest;
};