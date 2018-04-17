'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
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
    }),
    queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(100)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      login_count: {
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
    }),
    queryInterface.addColumn(
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
    ]; 
  },
  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.dropTable('Users'),
      queryInterface.dropTable('AccountTypes'),
      queryInterface.removeColumn("Users","account_type_id")            
    ]}
};