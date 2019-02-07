const assert = require("assert");
const { add } = require("../util");

describe("Integration", function() {
  it("should check addition of given number", function(done) {
    setTimeout(() => {
      assert.equal(add(2, 3), 5);
      done();
    }, 1500);
  });
});
