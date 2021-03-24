const every = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!callback(element)) return false;
  }
  return true;
};

module.exports = every;
