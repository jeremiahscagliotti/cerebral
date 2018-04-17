'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Events",
      "event_type_id",
        {
          type: Sequelize.INTEGER,
          references: {
            model: "EventTypes",
            key: "event_type_id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Events", "event_type_id");
  }
};
