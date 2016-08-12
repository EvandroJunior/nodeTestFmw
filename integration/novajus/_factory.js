require('../../infra/ui/helpers/legalOneHorsemanHelpers')();
require('../../infra/ui/helpers/legalOneShouldHelpers')();
require('../../infra/api/helpers/shouldHelpers')();

var Horseman = require('node-horseman');
var AVA = require('ava');
var Config = require('./_config');

module.exports = {

    getHorseman: function () {
        var horseman = new Horseman({
            timeout: Config.timeout,
            ignoreSSLErrors: true,
            loadImages : false
        });
        return horseman.config();
    },

    getConfig: function () {
        return Config;
    },

    getTest: function () {
        return AVA;
    }

};