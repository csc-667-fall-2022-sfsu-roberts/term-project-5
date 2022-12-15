module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable(
  'cardTable', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      game_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      inDeck: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING
      },
      effect: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cardTable');
    }
   };