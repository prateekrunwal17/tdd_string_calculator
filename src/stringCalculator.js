function add(numbers) {
    if (numbers === "") {
      return 0;
    }

    const numArray = numbers.split(/[\n,]/);
    const negatives = numArray.filter(num => parseInt(num) < 0);

    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
    
    const sum = numArray.reduce((acc, num) => acc + parseInt(num), 0);
    return sum;
  }
  
  module.exports = { add };