module.exports = {

    goToContactsModule: function () {
        var self = this;
        return self
            .click('#menucontatos>a')
            .waitForNextPage();
    },

    goToNewContact: function () {
        var self = this;
        return self
            .click('[href^="/contatos/pessoas/create"]')
            .waitForNextPage();
    },

    saveContacts: function (name) {
        var self = this;
        return self
            .type('#Nome', name)
            .click('button[value="0"]')
            .waitForNextPage();
    }

};