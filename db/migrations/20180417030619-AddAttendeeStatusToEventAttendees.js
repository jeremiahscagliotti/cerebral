'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        "EventAttendees",
        "attendee_status_id",
        {
          type: Sequelize.INTEGER,
          references: {
            model: "AttendeeStatuses",
            key: "attendee_status_id"
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("EventAttendees", "attendee_status_id");
  }
};
