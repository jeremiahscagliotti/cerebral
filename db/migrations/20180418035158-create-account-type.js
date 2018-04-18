'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('AccountTypes', {
      account_type_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account_type_name: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('AccountTypes');
  }
};
