const reduce = require('./reduce.js');

describe('reduce function', () => {
  it('should take in an array and a callback with parameters item and accumulator and optionally an initial value parameter. for each element of the array invoke the callback and pass the return value into the next function call', () => {
    const sum = reduce([1, 2, 3, 4], (accumulator, item) => accumulator + item);

    expect(sum).toEqual(10);
  });

  it('should use initial value if provided', () => {
    const diff = reduce(
      [1, 2, 3, 4],
      (accumulator, item) => accumulator - item,
      10
    );

    expect(diff).toEqual(0);
  });
});
