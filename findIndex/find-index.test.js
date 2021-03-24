const findIndex = require('./find-index.js');

describe('findIndex function', () => {
  it('takes in an array and a callback, then returns the index of the first element in the array which when fed into the callback returns true', () => {
    const index = findIndex([1, 2, '3', 4], (item) => typeof item === 'string');

    expect(index).toEqual(2);
  });
  it('when given an array with no matching values should return negative one', () => {
    const index = findIndex(['do', 're', 'me', 'fa', 'so', 'la', 'ti'], item => item.length > 2)

    expect(index).toEqual(-1);
  })
});
