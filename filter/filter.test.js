const filter = require('./filter.js');

describe('filter function', () => {
  it('takes an array and a callback, then returns a copy with values that return true when passed to the callback', () => {
    const names = ['john', 'james', 'michael'];
    const filteredNames = filter(names, name => name.startsWith('j'));

    expect(filteredNames).toEqual('john', 'james');
  });
});
