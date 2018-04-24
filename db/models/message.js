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
    User.hasMany(Chat, { foreignKey: 'user_id', sourceKey: 'isoCode' });
    Chat.belongsTo(User, { foreignKey: 'chat_id', targetKey: 'isoCode' });
  };
  return message;
};