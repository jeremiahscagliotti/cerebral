'use strict';
module.exports = (sequelize, DataTypes) => {
  var PageType = sequelize.define('PageType', {
    page_type_id: DataTypes.INTEGER,
    page_type: DataTypes.STRING(45)
  }, {});
  PageType.associate = function(models) {
    // associations can be defined here
  };
  return PageType;
};