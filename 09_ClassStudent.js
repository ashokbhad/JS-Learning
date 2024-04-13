class Student {
  constructor(RollNumber, Name, Division) {
    this.RollNumber = RollNumber;
    this.Name = Name;
    this.Division = Division;
  }
  getDetails() {
    console.log(
      `Student Details => RollNumber: ${this.RollNumber}, Name: ${this.Name} Division: ${this.Division}`
    );
  }
}

const Ganesh = new Student("18", "Ashok Bhad", "Pune");
console.log(Ganesh);
const Bhad = new Student("32", "Balasaheb Bhad", "Mumbai");
console.log(Bhad);
const Swati = new Student("52", "Suman Bhad", "Bid");
console.log(Swati);
