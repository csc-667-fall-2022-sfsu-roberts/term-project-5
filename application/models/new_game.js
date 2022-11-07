'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'new_game',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                deck_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                player_id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                is_public: {
                    type: Sequelize.BOOLEAN,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('NOW()'),
                    allowNull: false
                },
                max_players: {
                    type: Sequelize.INTEGER,
                    defaultValue: Sequelize.INTEGER('2'),
                    allowNull: false
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('test_table');
    }
};