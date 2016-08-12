var config = require('./legalOneConfig');

module.exports = {

    config: function () {
        var self = this;
        return self
            .viewport(1080, 1024)
            .userAgent(config.userAgent);
    }

};