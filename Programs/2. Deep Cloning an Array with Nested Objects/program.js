const original = [
  {
    id: 1,
    name: "XYZ",
    address: {
      city: "Kathmandu",
      country: "Nepal",
      postalCode: "208965",
    },
  },
  {
    id: 2,
    name: "ABC",
    address: {
      city: "Kathmandu",
      country: "Nepal",
      postalCode: "218965",
    },
  },
];

// Method 1: Using JSON.parse() and JSON.stringify()
const shallowClone = [...original];
const deepClone = JSON.parse(JSON.stringify(original));

shallowClone[0].id = 5;
deepClone[0].id = 10;

console.log(original);
console.log(shallowClone);
console.log(deepClone);

// Method 2: Using structuredClone()
const deepCloneStructured = structuredClone(original);
deepCloneStructured[0].id = 100;
console.log("Original = ", original);
console.log("Structured Clone = ", deepCloneStructured);
