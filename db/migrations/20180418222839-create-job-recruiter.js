'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobRecruiters', {
      job_recruiter_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jobs',
          key: 'job_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      recruiter_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recruiters',
          key: 'recruiter_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('JobRecruiters');
  }
};