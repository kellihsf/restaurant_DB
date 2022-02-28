"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          name: "KIPs BBQ",
          address: "123 Main St",
          category: "BBQ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob's Burgers",
          address: "456 Seaside Dr.",
          category: "Burgers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Linda's Winery",
          address: "789 2nd Ln",
          category: "Wine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Restaurants", null, {});
  },
};
