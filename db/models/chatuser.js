'use strict';
module.exports = (sequelize, DataTypes) => {
  var ChatUser = sequelize.define('ChatUser', {
    chat_user_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER
  }, {});
  ChatUser.associate = function(models) {
    // associations can be defined here
      models.User.belongsToMany(models.Chat, { through: "ChatUser", foreignKey: "user_id"});
      models.Chat.belongsToMany(models.User, { through: "ChatUser", foreignKey: "chat_id"});
  };
  return ChatUser;
};