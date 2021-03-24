const filter = (array, callback) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(callback(element)) newArr[i] = element;
  }
  return newArr;
};

module.exports = filter;
