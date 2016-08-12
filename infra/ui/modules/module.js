/**
 * 
 * 
 * @param {any} module
 * @returns
 */
function _getModuleLink(module) {
    switch (module) {
    case 'Processos':
        return '#menuprocessos>a';
    case 'Contatos':
        return '#menucontatos>a';
    default:
        throw new Error({ 'NotImplemented': 'Component not implemented just yet' });
    }
}

function _getModuleTitle(module) {
    switch (module) {
    case 'Processos':
        return 'Pesquisa de processos/recursos/incidentes - Novajus';
    case 'Contatos':
        return 'Pesquisa de pessoas físicas/jurídicas - Novajus';
    default:
        throw new Error({ 'NotImplemented': 'Component not implemented just yet' });
    }
}

function _getNewFormLink(module) {
    switch (module) {
    case 'Processos':
        return '[href^="/processos/processos/create"]';
    case 'Contatos':
        return '[href^="/contatos/pessoas/create"]';
    default:
        throw new Error({ 'NotImplemented': 'Component not implemented just yet' });
    }
}

function _getNewFormTitle(module) {
    switch (module) {
    case 'Processos':
        return 'Criando novo processo - Novajus';
    case 'Contatos':
        return 'Criando nova pessoa física - Novajus';
    default:
        throw new Error({ 'NotImplemented': 'Component not implemented just yet' });
    }
}

function _isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function _callCompFillMethod(horseman, type, name, value) {
    return horseman[type + 'Fill'](name, value);
}

function _callCompClearMethod(horseman, type, name, value) {
    return horseman[type + 'Clear'](name, value);
}

function _clickSaveButton(horseman) {
    return horseman.click('button[value="0"]')
            .waitForNextPage();
}

module.exports = {
    
    save: function (data) {
        if (typeof data === 'string') {
            throw new Error('data cannot be a string. Use an object instead!');
        }
        var self = this;
        for (var value in data.Fields) {
            var field = data.Fields[value];
            if (_isBlank(field.Type) || _isBlank(field.Name)) {
                throw new Error('Field name and component type should not be null or undefined');
            }
            if (_isBlank(field.Value)) {
                self = _callCompClearMethod(self, field.Type.toLowerCase(), field.Name, field.Value);
            }
            else {
                self = _callCompFillMethod(self, field.Type.toLowerCase(), field.Name, field.Value);
            }
        }
        return _clickSaveButton(self);
    },

    goto: function (module) {
        var self = this;
        var moduleLink = _getModuleLink(module);
        var moduleTitle = _getModuleTitle(module);
        return self
            .click(moduleLink)
            .waitForNextPage()
            .title().then(title => {
                title.should.be.exactly(moduleTitle);
            });
    },

    gotoNewForm: function (module) {
        var self = this;
        var link = _getNewFormLink(module);
        var title = _getNewFormTitle(module);
        return self
            .click(link)
            .waitForNextPage()
            .title().then(pageTitle => {
                pageTitle.should.be.exactly(title);
            });
    }

};