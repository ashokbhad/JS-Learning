class Person {
  constructor(Name, City, Age) {
    this.name = Name;
    this.city = City;
    this.age = Age;
  }
  details() {
    console.log(
      `Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`
    );
  }
}

const Ashok = new Person("Ashok", "Pune", 24);
// Ashok.details();

const Balasaheb = new Person("Balasaheb", "Hyderabad", 32);
// Balasaheb.details();

const Suman = new Person("Suman", "Bid", 52);
// Suman.details();

console.log(`===== Traversing Array Object =====`);
const array = [Ashok, Balasaheb, Suman];
for (const element of array) {
  element.details();
}
