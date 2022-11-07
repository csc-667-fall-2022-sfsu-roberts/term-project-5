'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'messages',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('NOW()'),
                    allowNull: false
                },
                content: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('test_table');
    }
};