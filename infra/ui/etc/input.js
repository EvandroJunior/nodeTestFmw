module.exports = {

    fill: function (componentName, componentValue) {
        var self = this;
        //todo: tem que retirar isso em algum momento. Nao pode ter # aqui
        return self
            .type('#' + componentName, componentValue);
    }

};
