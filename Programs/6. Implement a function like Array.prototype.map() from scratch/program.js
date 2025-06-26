Array.prototype.myMap = function (callback, thisArgs) {
  const currentArr = this;

  const result = [];

  for (let i = 0; i < currentArr.length; i++) {
    if (i in currentArr) {
      callback.call(thisArgs, currentArr[i], i, result);
    }
  }

  return result;
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 10].map((el, index) => {
  return el + 1;
});

console.log(newArr);
