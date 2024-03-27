const professor = {
  name: "Virat",
  age: 38,
  expertise: "Physics",
  experience: 12,
  university: "Pune UNI",
  salary: "$200k",
  degrees: {
    Engineering: "Physics",
    PHD: "Advanced Physics",
  },
  certificates: ["Material Physics", "Advanced Physics"],
};

console.log("1. Object Professor");
console.log(`2. Add nested object 'degrees' in an object`);
console.log(`3. Add array 'certificates' in an object`);
// process.stdout.write(`-> `);
console.log(professor);
console.log();

console.log(`5. Modified experience property`);
// process.stdout.write(`-> `);
professor.experience = 14;
console.log(`Updated Total Experience - ${professor.experience}`);
console.log();

console.log(`6. Added new certificate at 2nd index of 'certificates' array`);
// process.stdout.write(`-> `);
professor.certificates.push("Reactions & Ratio");
console.log(professor.certificates);
console.log();

console.log(`7. Log last element of 'certificates' array`);
// process.stdout.write(`-> `);
console.log(professor.certificates[professor.certificates.length - 1]);
console.log();

console.log(`8. Log complete object`);
// process.stdout.write(`-> `);
console.log(professor);
console.log();

console.log(`9. Traverse 'certificates' array elements using for loop `);
// process.stdout.write(`-> `);
for (let i = 0; i < professor.certificates.length; i++) {
  process.stdout.write(`${professor.certificates[i]} `);
}
