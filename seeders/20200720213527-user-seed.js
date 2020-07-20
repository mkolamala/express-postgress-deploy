"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Jayant",
          lastName: "Kolamala",
          email: "jayant@example.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Chris",
          lastName: "Wilker",
          email: "chris@example.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {});
  }
};
