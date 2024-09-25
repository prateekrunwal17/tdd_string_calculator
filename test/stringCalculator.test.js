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

  it('should return the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3")).to.equal(6);
  });

  it('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it('should throw an exception when multiple negative numbers are provided', () => {
    expect(() => add("1,-2,-3")).to.throw("Negative numbers not allowed: -2,-3");
  });
  
});
