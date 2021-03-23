const every = require('./every.js');

describe('every function', () => {
  it('takes an array and a callback, invoke callback for each element and returns true if all callbacks return true, or false if any single callback returns false', () => {
    const allNums = every([1, 2, 3, 4, 'bob'], item => typeof item === 'number');

    expect(allNums).toEqual('false');
  })
})