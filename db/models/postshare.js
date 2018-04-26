'use strict';
module.exports = (sequelize, DataTypes) => {
  var PostShare = sequelize.define('PostShare', {
    share_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    shared_by_id: DataTypes.INTEGER
  }, {});
  PostShare.associate = function(models) {
    // associations can be defined here
    models.Post.belongsToMany(models.User, { through: "PostShare", foreignKey: "post_id" });
    models.User.belongsToMany(models.Post, { through: "PostShare", foreignKey: "share_by_id" });
  };
  return PostShare;
};