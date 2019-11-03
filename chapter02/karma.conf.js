module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "browserify"],
    files: ["./spec/*.spec.js"],
    reporters: ["kjhtml"],
    preprocessors: {
      "./spec/*.spec.js": ["browserify"]
    },
    browsers: ["Chrome"],
    logLevel: config.LOG_DEBUG,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    }
  });
};
