Array.prototype.myMap = function (callback, thisArgs) {
  const result = [];
  const array = this;

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result.push(callback.call(thisArgs, array[i], i, array));
    }
  }

  return result;
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 10].myMap((el, index) => {
  return el + 1;
});

console.log(newArr);
