'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserView = sequelize.define('UserView', {
    user_view_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    viewed_id: DataTypes.INTEGER
  }, {});
  UserView.associate = function(models) {
    // associations can be defined here
  };
  return UserView;
};