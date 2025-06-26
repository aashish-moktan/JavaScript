const metrics = [
  {
    type: "sale",
    qty: 100,
    price: 1000,
  },
  {
    type: "purchase",
    qty: 50,
    price: 1000,
  },
  {
    type: "sale",
    qty: 200,
    price: 3000,
  },
  {
    type: "purchase",
    qty: 300,
    price: 299,
  },
];

// using map
const newMetrics = metrics.map((metric) => ({
  type: metric.type,
  qty: metric.qty,
}));

console.log(newMetrics);

// forEach
metrics.forEach((metric, index) => {
  console.log({
    type: metric.type,
    qty: metric.qty,
    price: metric.price,
  });
});

// reduce
const result = metrics.reduce((acc, metric) => {
  acc.qty = (acc.qty || 0) + metric.qty;
  acc.price = (acc.price || 0) + metric.price;
  return acc;
}, {});
console.log("total qty = ", result);

// filter
const purchaseObj = metrics.filter((metric) => metric.type === "purchase");
console.log("Purchase obj = ", purchaseObj);
