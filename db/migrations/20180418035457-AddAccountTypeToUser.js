'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users",
      "account_type_id",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "AccountTypes",
          key: "account_type_id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    ) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "account_type_id");
  }
};
