'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    company_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    page_type_id: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.belongsTo(models.User, { foreignkey: 'user_id' });
    Company.belongsTo(models.PageType, { foreignkey: 'page_type_id' });
  };
  return Company;
};