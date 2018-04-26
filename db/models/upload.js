'use strict';
module.exports = (sequelize, DataTypes) => {
  var Upload = sequelize.define('Upload', {
    upload_id: DataTypes.INTEGER,
    file_name: DataTypes.STRING(255),
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    upload_type_id: DataTypes.INTEGER
  }, {});
  Upload.associate = function(models) {
    // associations can be defined here
    Upload.belongsTo(models.User, { foreignkey: 'user_id' });
    Upload.belongsTo(models.UploadType, { foreignkey: 'upload_type_id' });
  };
  return Upload;
};