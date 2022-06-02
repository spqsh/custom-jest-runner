const fs = require("fs");
const { pass, fail } = require("create-jest-runner");

const runTest = ({ testPath, extraOptions: { restictedWords = [] } }) => {
  const start = Date.now();
  const contents = fs.readFileSync(testPath, "utf8");
  const end = Date.now();
  const title = "Custom check";

  if (!restictedWords.some((word) => contents.includes(word))) {
    return pass({ start, end, test: { path: testPath } });
  }

  const errorMessage =
    "\n------------------------\n" +
    `This file contains restricted words` +
    "\n------------------------\n";

  return fail({
    start,
    end,
    test: { path: testPath, errorMessage, title },
  });
};

module.exports = runTest;
