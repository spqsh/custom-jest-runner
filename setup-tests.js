expect.extend({
  toBeHex(received) {
    const containsHashSymbol = received.includes("#");
    const hasRequiredLength = received.length === 4 || received.length === 7;

    const pass = containsHashSymbol && hasRequiredLength;

    const message =
      `expected '${received}'` +
      (this.isNot ? " not " : " ") +
      "to be valid HEX string";

    return {
      pass,
      message: () => message,
    };
  },
});
