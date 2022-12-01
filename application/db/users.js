const db = require('./index');

const USERNAME_EXISTS = "SELECT * FROM users WHERE username=${username}";

const EMAIL_EXISTS = "SELECT * FROM users WHERE email=${email}";

const SIGN_UP_USER = "INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING id, username";

const SING_IN_USER = "SELECT * FROM users WHERE username=${username} AND password=${password}";

const signup = (username, email, password ) => {
    return db
        .none(USERNAME_EXISTS, { username })
        .then(() => db.none(EMAIL_EXISTS, { email } ))
        .then(() => db.one(SIGN_UP_USER, { username, email, password } ))
};

const signin = (username, password) => {
    return db.one(SING_IN_USER, { username, password });
}

module.exports = { signup, signin };