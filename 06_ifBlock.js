var isMarried = true;
if (isMarried) {
  console.log(`Married`);
}
console.log(`===========`);

var isMarried = false;
if (isMarried) {
  console.log(`Married`);
}
console.log(`===========`);

var marriageCheck = function (age, candidateName) {
  if (age >= 21) {
    console.log(`Eligible for marriage : Age- ${age}, Name- ${candidateName}`);
  }
  console.log(`Marriage eligibility check done`);
};
marriageCheck(23, "Bill");
marriageCheck(21, "Stew");
marriageCheck(20, "Virat");

console.log(`=================`);


var marriageEligibility = function(age, candidateName, gender){
    if (age>=21 && gender=="Male") {
        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);
    }
}
marriageEligibility(23, "Bill", "Male");
marriageEligibility(20, "Virat", "Male");
