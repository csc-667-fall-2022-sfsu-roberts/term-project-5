const db = require('./index')

const CREATE_GAME = "INSERT INTO new_games (title) VALUES (${title}) RETURNING id";

const ADD_PLAYER = "INSERT INTO new_players (user_id, game_id) VALUES (${user_id}, ${game_id}) RETURNING game_id";

const GAMES_LIST = "SELECT * FROM new_games ORDER BY created_at DESC LIMIT 7";

const create = (user_id, title = " ") => {
    return db.one(CREATE_GAME, { title })
    .then(({ id: game_id }) => {
        return db.one(ADD_PLAYER, { user_id, game_id });
    })
}

const addUser = (user_id, game_id) => {
    return db.one(ADD_PLAYER, { user_id, game_id });
}

const gameList = () => {
    return db.any(GAMES_LIST);
}

module.exports = { create, addUser, gameList};