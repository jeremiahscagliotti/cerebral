'use strict';
module.exports = (sequelize, DataTypes) => {
  var Interest = sequelize.define('Interest', {
    interest_id: DataTypes.INTEGER,
    name: DataTypes.STRING(255),
    link: DataTypes.TEXT,
    img: DataTypes.TEXT
  }, {});
  Interest.associate = function(models) {
    // associations can be defined here
  };
  return Interest;
};