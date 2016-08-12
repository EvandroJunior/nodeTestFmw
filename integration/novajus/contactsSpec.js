var factory = require('./_factory.js');
var config = factory.getConfig();
var test = factory.getTest();

test('Should add a contact', () => {
    var horseman = factory.getHorseman();
    var contactData = require('./testData.js');
    return horseman
        .login(config.testLoginURL, config.testEscritorio, 'qapp2', config.testPassword)
        .moduleGoto('Contatos')
        .moduleGotoNewForm('Contatos')
        .moduleSave(contactData.pessoa)
        .moduleGoto('Processos')
        .moduleGotoNewForm('Processos')
        .screenshot('novoProcesso.png');
        // .saveMatter()
        // .title().then(title => {
        //     title.should.be.exactly('Pesquisa de processos/recursos/incidentes - Novajus');
        // });
});