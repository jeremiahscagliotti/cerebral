'use strict';
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define('Message', {
    message_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER
  }, {});
  message.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Chat, { foreignKey: 'user_id' });
    models.Chat.belongsTo(models.User, { foreignKey: 'chat_id' });
  };
  return message;
};