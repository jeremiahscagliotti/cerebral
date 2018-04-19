'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    post_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    page_type_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo('User', { foreignkey: 'user_id' });
    Post.belongsTo('PageType', { foreignkey: 'page_type_id' });

  };
  return Post;
};