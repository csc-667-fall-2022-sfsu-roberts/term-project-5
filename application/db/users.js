const bcrypt = require('bcrypt');
const db = require('./index');

const USERNAME_EXISTS = "SELECT * FROM users WHERE username=${username}";

const EMAIL_EXISTS = "SELECT * FROM users WHERE email=${email}";

const SIGN_UP_USER = "INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING id, username";

const SING_IN_USER = "SELECT id, username, password FROM users WHERE username=${username}";

const signup = (username, email, password ) => {
    let blank = /^ *$/;
    return db
        .none(USERNAME_EXISTS, { username })
        .then(() => db.none(EMAIL_EXISTS, { email } ))
        .then(()=> {
            if ( username.match(blank) !== null || email.match(blank) !== null || password.match(blank) != null ) {
                return Promise.reject("Please enter all fields.");
            }
        })
        .then(() => bcrypt.hash(password, 10))
        .then((hash) => db.one(SIGN_UP_USER, { username, email, password: hash } ))
};

const signin = (username, password) => {
    return db
        .one(SING_IN_USER, { username })
        .then(({ id, username, password: hashedPassword }) => {
            return Promise.all([
                bcrypt.compare(password, hashedPassword),
                { id, username }
            ])
        })
        .then(([passwordsMatched, {id, username}]) => {
            if (passwordsMatched)
                return { id, username };
            else
                return Promise.reject("Please enter a valid Username and/or Password");
        })
}

module.exports = { signup, signin };