'use strict';
module.exports = (sequelize, DataTypes) => {
  var CompanyEmployee = sequelize.define('CompanyEmployee', {
    company_employee_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    personal_id: DataTypes.INTEGER
  }, {});
  CompanyEmployee.associate = function(models) {
    // associations can be defined here
    CompanyEmployee.belongsTo('User', { foreignkey: 'personal_id' });
    CompanyEmployee.belongsTo('Personal', { foreignkey: 'personal_id' });
  };
  return CompanyEmployee;
};