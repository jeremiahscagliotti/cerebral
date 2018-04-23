'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chat = sequelize.define('Chat', {
    chat_id: DataTypes.INTEGER
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};