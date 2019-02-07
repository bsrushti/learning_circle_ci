const assert = require("assert");
const { add } = require("../util");

describe("add", function() {
  it("should return addition of given number", function() {
    assert.equal(add(2, 3), 5);
  });
});
