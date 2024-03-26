let arrayNumbers = [2, 4, 1, 7, 9, 8, 7, 4, 1];
console.log(arrayNumbers);
const mySet = new Set();

for (const element of arrayNumbers) {
  mySet.add(element);
}
console.log(mySet);

const arrayUnique = [];
for (const element of mySet) {
  arrayUnique.push(element);
}
console.log(arrayUnique);

console.log(`====== Short cut way=========`);
const arrayElements = [...new Set(arrayNumbers)];
console.log(arrayElements);
