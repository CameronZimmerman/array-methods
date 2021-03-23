const reduce = (array, callback, initialValue) => {
  accumulator = typeof initialValue === 'undefined' ? array[0] : initialValue;

  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    accumulator = callback(accumulator, element);
  }
  return accumulator;
};

module.exports = reduce;
