const { getBlackColor, getWhiteColor } = require("./colors");

// :>
describe("helpers/colors", () => {
  test("getBlackColor should return '#000'", () => {
    expect(getBlackColor()).toBeHex();
    expect(getBlackColor()).toBe("#000");
  });

  test("getWhiteColor should return '#fff'", () => {
    expect(getBlackColor()).toBeHex();
    expect(getWhiteColor()).toBe("#fff");
  });
});
