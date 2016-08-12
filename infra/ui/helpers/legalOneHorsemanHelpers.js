var Horseman = require('node-horseman');
var loginModule = require('../modules/legalOneLogin');
var configModule = require('../config/horsemanConfig');
var matter = require('../modules/legalOneMatter.js');

var tools = require('../etc/legalOneTools.js');
var basicModule = require('../modules/module.js');

var input = require('../etc/input.js');
var lookup = require('../etc/lookup.js');

require('colors');

var registered = false;

module.exports = function () {

    if (registered) return;

    Horseman.registerAction('login', loginModule.login);
    Horseman.registerAction('getLoginErrorMsg', loginModule.getLoginErrorMsg);
    Horseman.registerAction('config', configModule.config);

    Horseman.registerAction('fillLookup', tools.fillLookup);

    Horseman.registerAction('goToMatterModule', matter.goToMatterModule);
    Horseman.registerAction('goToNewMatter', matter.goToNewMatter);
    Horseman.registerAction('saveMatter', matter.saveMatter);

    Horseman.registerAction('moduleSave', basicModule.save);
    Horseman.registerAction('moduleGoto', basicModule.goto);
    Horseman.registerAction('moduleGotoNewForm', basicModule.gotoNewForm);

    Horseman.registerAction('inputFill', input.fill);
    Horseman.registerAction('lookupFill', lookup.fill);    

    registered = true;
};