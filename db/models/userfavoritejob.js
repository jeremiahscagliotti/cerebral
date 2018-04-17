'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserFavoriteJob = sequelize.define('UserFavoriteJob', {
    user_favorite_job_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER
  }, {});
  UserFavoriteJob.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Job, {through: "UserFavoriteJob", foreignKey: "user_id"});
    Job.belongsToMany(models.User, {through: "UserFavoriteJob", foreignKey: "job_id"});
  };
  return UserFavoriteJob;
};