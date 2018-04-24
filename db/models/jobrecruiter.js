'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobRecruiter = sequelize.define('JobRecruiter', {
    job_recruiter_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER,
    recruiter_id: DataTypes.INTEGER
  }, {});
  JobRecruiter.associate = function(models) {
    // associations can be defined here
    Job.belongsToMany(models.Recruiter, { through: "JobRecruiter", foreignKey: "job_id" });
    Recruiter.belongsToMany(models.Job, { through: "JobRecruiter", foreignKey: "recruiter_id" });
  };
  return JobRecruiter;
};