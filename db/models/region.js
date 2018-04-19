'use strict';
module.exports = (sequelize, DataTypes) => {
  var Region = sequelize.define('Region', {
    region_id: DataTypes.INTEGER,
    name: DataTypes.STRING(255),
    company_id: DataTypes.INTEGER
  }, {});
  Region.associate = function(models) {
    // associations can be defined here
    Region.hasMany(Company, { foreignKey: 'company_id', sourceKey: 'isoCode' });
  };
  return Region;
};