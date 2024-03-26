let mapStudentMarks = new Map();
mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

mapStudentMarks.set("Ratan", 99); // Adding duplicate Key
mapStudentMarks.set("Ashok", 45); // Adding duplicate value
console.table(mapStudentMarks);

let jennyMarks = mapStudentMarks.get("Jenny");
console.log(`Jenny Marks: ${jennyMarks}`);

const isAvailable = mapStudentMarks.has("Larry");
console.log(`Is Key "Larry" available : ${isAvailable}`);
const result = mapStudentMarks.has("Sundar");
console.log(`Is key "Sundar" available : ${result}`);

const totalElements = mapStudentMarks.size;
console.log(`Size of Map or Total elements in the map is: ${totalElements}`);

mapStudentMarks.delete("Andy");
console.table(mapStudentMarks);

console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log(`========= keys() and values() method=================`);
const keys = mapStudentMarks.keys();
for (const iterator of keys) {
  console.log(iterator);
}

const values = mapStudentMarks.values();
for (const iterator of values) {
  console.log(iterator);
}

console.log(`========= Traversing Map=================`);
const keysMap = mapStudentMarks.keys();
for (const key of keysMap) {
  const value = mapStudentMarks.get(key);
  console.log(`Student Name: ${key} and Marks: ${value}`);
}
