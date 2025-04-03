const controller = require('./controllers');

const router = (app) => {
    app.get('/login', controller.Account.loginPage);
    app.post('/login', controller.Account.login);

    app.get('/signup', controller.Account.signupPage);
    app.post('/signup', controller.Account.signup);

    app.get('/logout', controller.Account.logout);
    app.get('/maker', controller.Domo.makerPage);
    app.post('/maker', controller.Domo.makeDomo);

    app.get('/', controller.Account.loginPage);

};

module.exports = router;