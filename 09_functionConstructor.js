function Person(name, city, age) {
  this.name = name;
  this.city = city;
  this.age = age;
}

Person.prototype.country = "Bharat";
const jenny = new Person("Jenny", "Pune", 23);
console.log(`${jenny.name}, ${jenny.city}, ${jenny.age}, ${jenny.country},`);
const bill = new Person("Bill", "Mumbai", 34);
console.log(`${bill.name}, ${bill.city}, ${bill.age}, ${bill.country},`);
const stew = new Person("Stew", "LA", 54);
console.log(`${stew.name}, ${stew.city}, ${stew.age}, ${stew.country},`);
const elon = new Person("Elon", "Bangalore", 30);
console.log(`${elon.name}, ${elon.city}, ${elon.age}, ${elon.country},`);

// instanceof
const result = elon instanceof Person;
console.log(result);

const array = [2, 4, 6, 8];
array.push(7);
console.log(array);
