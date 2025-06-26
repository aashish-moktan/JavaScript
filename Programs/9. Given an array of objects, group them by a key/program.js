const users = [
  {
    name: "John",
    country: "USA",
  },
  {
    name: "Rajiv",
    country: "India",
  },
  {
    name: "Nabin",
    country: "Nepal",
  },
  {
    name: "Madan",
    country: "Nepal",
  },
  {
    name: "Kapil",
    country: "India",
  },
  {
    name: "Chris",
    country: "USA",
  },
];

const groupedUsers = users.reduce((acc, user) => {
  if (user.country in acc) {
    acc[user.country].push(user);
  } else {
    acc[user.country] = [user];
  }
  return acc;
}, {});

console.log("Grouped users :: ", groupedUsers);
