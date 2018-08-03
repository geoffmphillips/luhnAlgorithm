var luhn = require('../lib/luhn');
var assert = require("chai").assert;

describe("Luhn Algorithm", function() {
  it("Should return true if number passed satisfies Luhn Algorithm", function() {
    var luhnNum = 79927398713;
    assert.isTrue(luhn.check(luhnNum));
  });
});

describe("Luhn Algorithm", function() {
  it("Should return true if number passed satisfies Luhn Algorithm", function() {
    var luhnNum = 79927398710;
    assert.isTrue(luhn.check(luhnNum));
  });
});
