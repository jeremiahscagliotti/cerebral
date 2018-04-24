'use strict';
module.exports = (sequelize, DataTypes) => {
  var AccountType = sequelize.define('AccountType', {
    account_type_id: DataTypes.INTEGER,
    account_type_name: DataTypes.STRING(45)
  }, {});
  AccountType.associate = function(models) {
    // associations can be defined here
  };
  return AccountType;
};