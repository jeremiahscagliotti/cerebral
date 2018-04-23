'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSearch = sequelize.define('UserSearch', {
    user_search_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    search: DataTypes.STRING(255)
  }, {});
  UserSearch.associate = function(models) {
    // associations can be defined here
    UserSearch.hasMany(User, { foreignKey: 'user_id', sourceKey: 'isoCode' });
  };
  return UserSearch;
};