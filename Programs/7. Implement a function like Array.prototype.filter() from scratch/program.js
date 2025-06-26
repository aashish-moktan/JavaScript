Array.prototype.myFilter = function (callback, thisArgs) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArgs, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 10].myFilter((el, index) => {
  return el > 4;
});

console.log(newArr);
