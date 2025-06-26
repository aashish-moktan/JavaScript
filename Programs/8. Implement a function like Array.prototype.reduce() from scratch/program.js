Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  let accumulator;
  let startIndex;

  // If initialValue is provided
  if (initialValue != undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};

const result = [1, 2, 3, 4].myReduce((acc, el) => {
  acc = acc + el;
  return acc;
}, 0);

console.log("Result :: ", result);
