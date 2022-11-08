'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class new_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  new_game.init({
    id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    isPublic: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    max_players: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'new_game',
  });
  return new_game;
};