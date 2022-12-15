const db = require('./index')

const CREATE_GAME = "INSERT INTO new_games (title) VALUES (${title}) RETURNING id";
const ADD_PLAYER = "INSERT INTO new_players (user_id, game_id) VALUES (${user_id}, ${game_id}) RETURNING game_id";
const GAMES_LIST = "SELECT * FROM new_games ORDER BY created_at DESC LIMIT 7";
const PLAYER_EXISTS = "SELECT * FROM new_players WHERE (user_id=${user_id} AND game_id=${game_id})";
const PLAYERS_LIST = "SELECT * FROM new_players WHERE game_id=${game_id}";
const GAMES_JOINED = "SELECT np.id, ng.user_id, ng.id, ng.title, ng.created_at\
    FROM new_players np \
    JOIN new_games ng \
    ON np.game_id=ng.id \
    WHERE np.user_id = ${user_id} \
    ORDER BY ng.created_at DESC";

const create = (user_id, title = " ") => {
    return db.one(CREATE_GAME, { title })
    .then(({ id: game_id }) => {
        return db.one(ADD_PLAYER, { user_id, game_id });
    })
}

const addUser = (user_id, game_id) => {
    return db.none(PLAYER_EXISTS, { user_id, game_id })
    .then(() => {
        db.one(ADD_PLAYER, { user_id, game_id });
    })
}

const gameList = () => {
    return db.any(GAMES_LIST);
}

const playersList = (game_id) => {
    return db.any(PLAYERS_LIST, { game_id });
}

const gamesJoined = (user_id) => {
    return db.any(GAMES_JOINED, { user_id });
}

module.exports = { create, addUser, gameList, playersList, gamesJoined };