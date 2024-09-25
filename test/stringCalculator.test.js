const { expect } = require('chai');
const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).to.equal(0);
  });

  it('should return the number itself when one number is provided', () => {
    expect(add("1")).to.equal(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(add("1,5")).to.equal(6);
  });
  
});
