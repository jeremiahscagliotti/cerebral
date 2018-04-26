'use strict';
module.exports = (sequelize, DataTypes) => {
  var Friendship = sequelize.define('Friendship', {
    friendship_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    friend_id: DataTypes.INTEGER
  }, {});
  Friendship.associate = function(models) {
    // associations can be defined here
    Friendship.belongsTo(models.User, { foreignkey: 'user_id' });
    Friendship.belongsTo(models.Friendship, { foreignkey: 'friend_id' })
  };
  return Friendship;
};