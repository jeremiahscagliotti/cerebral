'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recruiter = sequelize.define('Recruiter', {
    recruiter_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING(45),
    last_name: DataTypes.STRING(45),
    middle_name: DataTypes.STRING(45),
    user_id: DataTypes.INTEGER,
    page_type_id: DataTypes.INTEGER
  }, {});
  Recruiter.associate = function(models) {
    // associations can be defined 
    Recruiter.belongsTo(models.User, { foreignkey: 'user_id' });
    Recruiter.belongsTo(models.PageType, { foreignkey: 'page_type_id' });
  };
  return Recruiter;
};