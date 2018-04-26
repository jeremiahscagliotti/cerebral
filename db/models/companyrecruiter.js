'use strict';
module.exports = (sequelize, DataTypes) => {
  var CompanyRecruiter = sequelize.define('CompanyRecruiter', {
    company_recruiter_id: DataTypes.INTEGER,
    recruiter_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER
  }, {});
  CompanyRecruiter.associate = function(models) {
    // associations can be defined here
    models.Recruiter.belongsToMany(models.Company, { through: "CompanyRecruiter", foreignKey: "recruiter_id" });
    models.Company.belongsToMany(models.Recruiter, { through: "CompanyRecruiter", foreignKey: "company_id" });
  };
  return CompanyRecruiter;
};