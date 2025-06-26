const arr = [1, [2, 3], [[4, 5], 6], 7, 8];

function flattenDeep(arr) {
  return arr.reduce((acc, el) => {
    return Array.isArray(el) ? acc.concat(flattenDeep(el)) : acc.concat(el);
  }, []);
}

console.log(flattenDeep([1, [2, [3, 4]]]));
