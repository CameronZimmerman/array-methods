const findIndex = require('./find-index.js');

describe('findIndex function', () => {
  it('takes in an array and a callback, then returns the index of the first element in the array which when fed into the callback returns true', () => {
    const index = findIndex([1, 2, '3', 4], (item) => typeof item === 'string');

    expect(index).toEqual(2);
  });
});
