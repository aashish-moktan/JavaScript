const arr = [1, 2, 3, 4, 4, 2, 5, 2, 6, 8, 8, 9, 1, 7, 7, 9, 0, 0];

// Method 1: Using Set
const newArr = [...new Set(arr)];
console.log("New array :: ", newArr);

// Method 2: Using Hash Map
let hash = {};
let newArr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] in hash) {
    continue;
  } else {
    hash[arr[i]] = true;
    newArr1.push(arr[i]);
  }
}
console.log("New array 1 :: ", newArr1);

// Method 3: Using Filter
const unique = arr.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log(unique); // [1, 2, 3, 4]

// Method 4: Using reduce()
const newArr2 = arr.reduce((acc, element) => {
  if (!acc.includes(element)) acc.push(element);
  return acc;
}, []);
console.log("New array using reduce :: ", newArr2);
