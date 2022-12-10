const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sessionInstance = require("./app-config/session");
const protect = require('./app-config/protect');

if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

const indexRouter = require('./routes/pages/index');
const authRouter = require('./routes/pages/auth');
const lobbyRouter = require('./routes/pages/lobby');
const gamesRouter = require('./routes/pages/games');
const chatRouter = require('./routes/authenticate/chat');

const sessionInstance = require('./app-config/session');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, './public/views');
app.use(sessionInstance);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
  if(request.session.username)
    response.locals.logged = true;
  next();
})

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/lobby', protect, lobbyRouter);
app.use('/games', protect, gamesRouter);
app.use('/chat', chatRouter); // need to authenticate

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
