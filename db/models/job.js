'use strict';
module.exports = (sequelize, DataTypes) => {
    var Job = sequelize.define('Job', {
        job_id: DataTypes.INTEGER,
        title: DataTypes.STRING(100),
        description: DataTypes.TEXT,
        compensation: DataTypes.DECIMAL(9,2)
        },
        {}); Job.associate = function(models) {
        // associations can be defined here
      };
      return Job;
    };