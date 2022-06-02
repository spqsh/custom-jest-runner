class CustomWatchPlugin {
  constructor() {
    this.active = false;
  }

  apply(jestHooks) {
    jestHooks.onTestRunComplete((results) => {
      if (this.active) {
        console.log(
          "\n------------------------\n" +
            "Custom Watch Plugin Output" +
            "\n------------------------\n"
        );

        const { numFailedTests, numPassedTests, numTotalTests } = results;

        console.log(
          `Total ${numTotalTests} test(s), ${numFailedTests} test(s) failed, ${numPassedTests} test(s) passed\n`
        );
      }
    });

    jestHooks.shouldRunTestSuite(() => true);

    jestHooks.onFileChange(() => {});
  }

  getUsageInfo() {
    return {
      key: "k",
      prompt: "toggle custom watch plugin",
    };
  }

  run() {
    this.active = !this.active;

    return Promise.resolve(true);
  }
}

module.exports = CustomWatchPlugin;
