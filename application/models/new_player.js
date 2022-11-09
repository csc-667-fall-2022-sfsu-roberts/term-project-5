'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class new_player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  new_player.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    player_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'new_player',
  });
  return new_player;
};