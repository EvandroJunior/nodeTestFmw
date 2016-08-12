var config = require('../config/legalOneConfig');

module.exports = {

    login: function (url, escritorio, usuario, senha) {
        var self = this;
        return self
            .open(url)
            .type(config.inputEscritorio, escritorio)
            .type(config.inputUsuario, usuario)
            .type(config.inputSenha, senha)
            .click(config.inputBotaoLogin)
            .waitForNextPage()
            .title().then(title => {
                title.should.be.exactly('Painel de informações globais - Novajus');
            });
    },

    getLoginErrorMsg: function () {
        var self = this;
        return self
            .waitForSelector(config.divLoginError)
            .text(config.divLoginError);
    }

};