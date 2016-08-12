var factory = require('./_factory.js');
var config = factory.getConfig();
var test = factory.getTest();
var api = require('./infra/api/google');

test('Should login using the right credentials', () => {
    return api.accessGoogle()
    .then(response => {
        response.status.should.be.a.validResponse();
    })
    .then(() => {
        var horseman = factory.getHorseman();
        return horseman
        .login(config.testLoginURL, config.testEscritorio, 'qapp', config.testPassword)
        .waitForNextPage();
    });
});

test('Should not login using wrong credentials', () => {
    var horseman = factory.getHorseman();
    return horseman
    .login(config.testLoginURL, config.testEscritorio, 'wrong_user', config.testPassword)
    .getLoginErrorMsg()
    .then(erroMsg => {
        erroMsg.should.be.a.wrongUserOrPasswordMessage();
    });
});