'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    user_id: DataTypes.INTEGER,
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(255),
    login_count: DataTypes.INTEGER,
    account_type_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.AccountType);
  };
  return User;
};