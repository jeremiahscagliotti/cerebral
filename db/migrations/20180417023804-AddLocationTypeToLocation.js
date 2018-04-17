'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          "Locations",
          "location_type_id",
          {
              type: Sequelize.INTEGER,
              references: {
                  model: "LocationTypes",
                  key: "location_type_id"
              },
              onUpdate: "CASCADE",
              onDelete: "CASCADE"
          }
      )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("Locations", "location_type_id");
  }
};
