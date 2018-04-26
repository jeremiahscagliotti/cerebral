'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserEducation = sequelize.define('UserEducation', {
    user_education_id: DataTypes.INTEGER,
    strart_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    degree: DataTypes.STRING(255),
    user_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  }, {});
  UserEducation.associate = function(models) {
    // associations can be defined here
    models.User.belongsToMany(models.Company, { through: "UserEducation", foreignKey: "user_id" });
    models.Company.belongsToMany(models.User, { through: "UserEducation", foreignKey: "company_id" });
  };
  return UserEducation;
};