const db = require('./index');

const USERNAME_EXISTS = "SELECT * FROM users WHERE username=${username}";

const EMAIL_EXISTS = "SELECT * FROM users WHERE email=${email}";

const REGISTER_USER = "INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING id, username";

const signup = (username, email, password ) => {
    return db
        .none(USERNAME_EXISTS, { username })
        .then(() => db.none(EMAIL_EXISTS, { email } ))
        .then(() => db.one(REGISTER_USER, { username, email, password } ))
};

module.exports = { signup };