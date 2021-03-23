describe('map function', () => {
  it('takes an array, and a callback and creates a new array with the return values of the callback for each element in the original array', () => {
    const mapped = map([1, 2, 3], (n) => n + 1);

    expect(mapped).toEqual([2, 3, 4]);
  });
});
