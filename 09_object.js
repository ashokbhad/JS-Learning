let person = {
  name: "Ashok",
  city: "Pune",
  experience: 12,
};
console.log(person);
// console.table(person);

console.log(`Type of person is: ${person}`);

console.log(`====== Accessing object properties =========`);
let personCity = person["city"]; // [] Notation
console.log(`Person city is: ${personCity}`);

const personExp = person.experience; // dot Notation
console.log(`Person experience is: ${personExp}`);

console.log(`====== Adding properties in an object =========`);
person.isMarried = true;
console.log(person);

console.log(`====== Delete properties from an object =========`);
delete person.experience;
console.log(person);

console.log(`====== Creating an empty object =========`);
let address = {};
address.pin = 112233;
console.log(address);

console.log(`====== Creating method inside an object =========`);
const bankSbi = {
  bankName: "SBI Bank",
  city: "Hinjewadi",
  totalStaff: 100,
  homeLoanROI: 9.6,
  bankDetails: function () {
    console.log(`Bank Details`);
    console.log(
      `Name:${this.bankName}, City: ${this.city}, total staff: ${this.totalStaff}, ROI: ${this.homeLoanROI}`
    );
  },
};
bankSbi.bankDetails();

console.log(`======== Nested Object============`);
const jennyPerson = {
  name: "Ashok Bhad",
  age: 24,
  country: "INDIA",
  address: {
    flatNo: 1004,
    floorNumber: 10,
    street: "Hinjewadi",
    city: "Pune",
    state: "MAHARASHTRA",
    getAddress: function () {
      const address = `Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`;
      return address;
    },
  },
};
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "MAHARASHTRA";

console.log(`===== Ashok complete address to courier is ======`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);
