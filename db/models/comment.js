'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    comment_id: DataTypes.INTEGER,
    comment_body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    parent_comment_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignkey: 'user_id' });
    Comment.belongsTo(models.Post, { foreignkey: 'post_id' });
    Comment.belongsTo(models.Comment, {foreignkey: 'parent_comment_id'})
  };
  return Comment;
};