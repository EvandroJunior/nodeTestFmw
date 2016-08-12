var should = require('should');

module.exports = function () {
    should.Assertion.add('wrongUserOrPasswordMessage', function () {
        this.params = { operator: 'to be a wrong user or password message' };
        this.obj.should.be.exactly('Usuário ou senha inválidos.\n');
    });
};