const config = require("../custom-runner.config.js");

const { createJestRunner } = require("create-jest-runner");
module.exports = createJestRunner(require.resolve("./run"), {
  getExtraOptions: () => config,
});
