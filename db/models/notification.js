'use strict';
module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define('Notification', {
    notification_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    link: DataTypes.STRING(255),
    user_id: DataTypes.INTEGER
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo('User', { foreignkey: 'user_id' });
  };
  return Notification;
};