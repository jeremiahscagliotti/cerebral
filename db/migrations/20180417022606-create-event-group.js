'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventGroups', {
      event_group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Events',
            key: 'event_id'
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
      rank: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('EventGroups');
  }
};