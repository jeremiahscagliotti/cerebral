'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_in_chat = sequelize.define('UserInChat', {
    user_in_chat_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER
  }, {});
  user_in_chat.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Chat, { through: "user_in_chat", foreignKey: "user_id" });
    Chat.belongsToMany(models.User, { through: "user_in_chat", foreignKey: "chat_id" });
  };
  return user_in_chat;
};