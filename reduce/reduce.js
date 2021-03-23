const reduce = (array, callback, initialValue) => {

  accumulator = initialValue || array[0];

  for (let i = initialValue? 0 : 1 ; i < array.length; i++) {
    const element = array[i];
    accumulator = callback(accumulator, element);
  }
  return accumulator;
};

module.exports = reduce;
