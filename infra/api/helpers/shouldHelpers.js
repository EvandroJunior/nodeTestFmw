var should = require('should');
require('colors');

module.exports = function () {
    should.Assertion.add('validResponse', function () {
        this.params = { operator: 'to be a valid response' };
        this.obj.should.be.exactly(200).and.be.a.Number();
    });
};