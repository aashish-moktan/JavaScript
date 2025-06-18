/* Print all elements of an array */

function generateRandomNumberArray(length, min, max) {
  return Array.from(
    { length: length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

const arr = generateRandomNumberArray(10, 1, 100);

// first method
console.log("Using for loop ::");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// second method
console.log("Using for each ::");
arr.forEach((el, index) => {
  console.log(el);
});

// third method
console.log("Using while loop :: ");
var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// fourth method
console.log("Using do while loop :: ");
var i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

// fifth method
console.log("Using map :: ");
arr.map((el) => {
  console.log(el);
});

// sixth way
console.log("Using for ... of :: ");
for (let element of arr) {
  console.log(element);
}

// seventh way
console.log("Using for ... in :: ");
for (let key in arr) {
  console.log(arr[key]);
}

// eighth way
console.log("Using console.table() :: ");
console.table(arr);

// ninth way
console.log("Using JSON.stringify() :: ");
console.log(JSON.stringify(arr));

// tenth way
console.log("Using reduce :: ");
arr.reduce((_, item) => {
  console.log(item);
  return 0;
}, 0);

// eleventh way
console.log("Using spread operator :: ");
console.log(...arr);

// twelth way
console.log("Using Array.prototype.entries() :: ");
for (let [index, value] of arr.entries()) {
  console.log(`Index ${index}: ${value}`);
}

// 13th way
console.log("Using Array.prototype.keys() :: ");
for (let key of arr.keys()) {
  console.log(arr[key]);
}

// 14th way
console.log("Using Array.prototype.values() :: ");
for (let value of arr.values()) {
  console.log(value);
}

// 15th way
console.log("Using Object.entries() :: ");
Object.entries(arr).forEach(([index, value]) => {
  console.log(index, value);
});

// 16th way
console.log("Using filters :: ");
arr.filter((item) => console.log(item));

// 17th way
console.log("Using Generator and for...of");
function* gen(arr) {
  for (let val of arr) yield val;
}

for (let val of gen(arr)) {
  console.log(val);
}
