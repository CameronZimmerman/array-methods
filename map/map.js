const map = (array, callback) => {
  let newArray = array;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let newElement = callback(element);
    newArray[i] = newElement;
  }
  return newArray;
}

module.exports = map;