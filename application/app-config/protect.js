const protect = (request, response, next) => {
    if (request.session.authenticated)
        next();
    else
        response.redirect('/auth/signup');
}

module.exports = protect;