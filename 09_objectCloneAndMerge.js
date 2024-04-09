const person = {
  name: "Ashok",
  city: "Pune",
  experience: 10,
};

// Cloning an Object using spread Operator

const personClone = { ...person };
console.log(person);

personClone.name = "Elon";
console.log(personClone);

// Cloning an Object using Object.assign()

console.log(`===== Cloning an Object using Object.assign()======`);
const cloneObjet = Object.assign({}, person);
console.log(cloneObjet);

// Merging an object
console.log(`======== Merging an object ==========`);

const personGK = {
  name: "Ashok Bhad",
  city: "Pune",
  experience: 10,
};

const address = {
  flatNumber: 1004,
  wing: "E Block",
  street: "Bid",
};

const mergedObject = Object.assign({}, personGK, address);
console.log(`====== mergedObject=========`);
console.table(mergedObject);

console.log(`====== personAB=========`);
console.table(personGK);
