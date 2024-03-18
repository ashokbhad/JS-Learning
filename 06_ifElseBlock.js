var person = "RAM";
var age = 17;

// Voting age should be greater than equal 18
if (age >= 18) {
  console.log(`Yes. please vote. Age: ${age}, Name: ${person}`);
} else {
  console.log(`Sorry. please try next year. Age: ${age}, Name: ${person}`);
}

console.log(`----------------------------`);
function vote(person, age) {
  if (age >= 18) {
    console.log(`Yes. please vote. Age: ${age}, Name: ${person}`);
  } else {
    console.log(`Sorry. please try next year. Age: ${age}, Name: ${person}`);
  }
}
vote("Jenny", 34);
vote("Bill", 14);
vote("Virat", 18);
