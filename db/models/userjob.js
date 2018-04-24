'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserJob = sequelize.define('UserJob', {
    user_job_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  UserJob.associate = function(models) {
    // associations can be defined here
      Job.belongsToMany(models.User, {through: "UserJob", foreignKey: "job_id"});
      User.belongsToMany(models.Job, {through: "UserJob", foreignKey: "user_id"});
  };
  return UserJob;
};