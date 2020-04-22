const hello = require("./index");

describe("Hello", () => {
  it("should log hello", () => {
    const log = jest.fn();

    hello(log);
    expect(log.mock.calls).toEqual([["Hello world!"]]);
  });
});
