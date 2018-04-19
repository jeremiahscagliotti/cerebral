'use strict';
module.exports = (sequelize, DataTypes) => {
  var Personal = sequelize.define('Personal', {
    personal_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING(45),
    last_name: DataTypes.STRING(45),
    middle_name: DataTypes.STRING(45),
    biography: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    page_type_id: DataTypes.INTEGER
  }, {});
  Personal.associate = function(models) {
    // associations can be defined here
    Personal.belongsTo('User',{foreignkey:'user_id'});
    Personal.belongsTo('PageType',{foreignkey:'page_type_id'});
  };
  return Personal;
};