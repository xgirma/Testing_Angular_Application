"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
