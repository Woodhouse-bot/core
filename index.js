'use strict';

// Npm modules
const promise = require('bluebird');
const nedb = require('nedb');

// Data
const systemData = promise.promisifyAll(new nedb({ filename: 'system-data.db', autoload: true }));
const interfacePrefs = promise.promisifyAll(new nedb({ filename: 'interface-prefs.db', autoload: true }));
const pluginPrefs = promise.promisifyAll(new nedb({ filename: 'plugin-prefs.db', autoload: true }));
const basePrefs = promise.promisifyAll(new nedb({ filename: 'base-prefs.db', autoload: true }));
const users = promise.promisifyAll(new nedb({ filename: 'users.db', autoload: true }));

// Woodhouse modules
const modulePrefsClass = require('./lib/systemPrefs.js');
const moduleLoaderClass = require('./lib/moduleLoader.js');
const moduleDataClass = require('./lib/moduleData.js');
const dispatcherClass = require('./lib/dispatcher.js');
const rolesClass = require('./lib/roles.js');
const usersClass = require('./lib/users.js');
const cronClass = require('./lib/cron.js');
const yesNoClass = require('./lib/yesNo.js');
const coreListeners = require('./lib/coreListeners.js');

basePrefs.findOneAsync({name: 'name'}).then(function(instanceName){
    const dispatcher = new dispatcherClass();
    const moduleData = new moduleDataClass(interfacePrefs, pluginPrefs);
    const cron = new cronClass();
    const moduleLoader = new moduleLoaderClass(dispatcher, moduleData, cron);
    moduleLoader.getModules();
});
