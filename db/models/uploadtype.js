'use strict';
module.exports = (sequelize, DataTypes) => {
  var UploadType = sequelize.define('UploadType', {
    upload_id: DataTypes.INTEGER,
    type: DataTypes.STRING(255)
  }, {});
  UploadType.associate = function(models) {
    // associations can be defined here
  };
  return UploadType;
};