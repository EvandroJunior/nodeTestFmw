module.exports = {

    goToMatterModule: function () {
        var self = this;
        return self
            .click('#menuprocessos>a')
            .waitForNextPage();
    },

    goToNewMatter: function () {
        var self = this;
        return self
            .click('[href^="/processos/processos/create"]')
            .waitForNextPage();
    },

    saveMatter: function () {
        var self = this;
        return self
            //.fillLookup('#NaturezaText', 'Cível')
            //.fillLookup('#Cliente_EnvolvidoText', 'Escritório local')
            //.fillLookup('#Cliente_PosicaoEnvolvidoText', 'Chamado ao processo')
            //.clear('#Responsavel_EnvolvidoText')  
            //.fillLookup('#Responsavel_EnvolvidoText', 'Administrador')
            //.clear('#Responsavel_PosicaoEnvolvidoText')   
            //.fillLookup('#Responsavel_PosicaoEnvolvidoText', 'Responsável')
            //adicionar outro envolvudo    
            .click('#add_outro_envolvido')
            //preencher o campo SITUACAO painel outros envolvidos
            .waitForSelector('select[id$="SituacaoEnvolvidoId"]')
            .select('select[id$="SituacaoEnvolvidoId"]', '4')
            .fillLookup('[id^="OutrosEnvolvidos"][id$="PosicaoEnvolvidoText"]','Contador')
            .fillLookup('[id^="OutrosEnvolvidos"][id$="EnvolvidoText"]', 'colucci08')
            .click('button[value="0"]')
            .waitForNextPage();
    }

};