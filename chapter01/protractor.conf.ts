import {Config} from 'protractor';

export let config: Config = {
    allScriptsTimeout: 11000,
    specs: [
        './*.spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        // print: function() {}
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};