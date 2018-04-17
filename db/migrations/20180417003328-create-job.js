'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Jobs', {
            job_id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            title: {
              type: Sequelize.STRING(100)
            },
            description: {
              type: Sequelize.TEXT
            },
            compensation: {
              type: Sequelize.DECIMAL(9,2)
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            });
        },
        down: (queryInterface, Sequelize) => {
          return queryInterface.dropTable('Jobs');
        }
    };