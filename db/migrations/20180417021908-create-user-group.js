'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserGroups', {
      user_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'user_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Groups',
            key: 'group_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      is_admin: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('UserGroups');
  }
};