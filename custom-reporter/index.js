class CustomReporter {
  onRunComplete(testContexts, results) {
    console.log(
      "\n------------------------\n" +
        "Custom Reporter Output" +
        "\n------------------------\n"
    );

    const { numFailingTests, numPassingTests, numTotalTests } =
      results.testResults.reduce(
        (acc, curr) => ({
          numFailingTests: acc.numFailingTests + curr.numFailingTests,
          numPassingTests: acc.numPassingTests + curr.numPassingTests,
          numTotalTests:
            acc.numTotalTests + curr.numFailingTests + curr.numPassingTests,
        }),
        {
          numFailingTests: 0,
          numPassingTests: 0,
          numTotalTests: 0,
        }
      );

    console.log(
      `Total ${numTotalTests} test(s), ${numFailingTests} test(s) failed, ${numPassingTests} test(s) passed\n`
    );
  }
}

module.exports = CustomReporter;
