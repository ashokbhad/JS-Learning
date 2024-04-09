const person = {
  name: "Ashok",
  city: "Pune",
  experience: 10,
};
// Not Allowed
// person = {
//   pin: 87654,
// };

console.log(person);
person.city = "Mumbai";
console.log(person);

const address = {
  flatNumber: 1005,
  wing: "B2 Block",
  street: "Bid",
};

console.log(address);
Object.freeze(address);

address.street = "Pune"; // Won't reflect this change as object address is freezed
console.log(address);

// in operator
const result = "street" in address;
console.log(result);
console.log("pin" in address);

// Get the keys from an object
const keys = Object.keys(address);
console.log(keys);

// Get the values from an object
const values = Object.values(address);
console.log(values);
