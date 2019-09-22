const hello = require("./index");

global.console.log = jest.fn();

describe("Hello", () => {
  it("should log hello", () => {
    hello();
    expect(global.console.log.mock.calls[0][0].includes("Hello")).toBe(true);
  });
});
