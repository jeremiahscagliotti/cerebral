'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserWork = sequelize.define('UserWork', {
    user_work_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    title: DataTypes.STRING(100),
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  }, {});
  UserWork.associate = function(models) {
    // associations can be defined here
      models.User.belongsToMany(models.Company, {through: 'UserWork', foreignKey: 'user_id'});
      models.Company.belongsToMany(models.User, {through: 'UserWork', foreignKey: 'company_id'});
  };
  return UserWork;
};