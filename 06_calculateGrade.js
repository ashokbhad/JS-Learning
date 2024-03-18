// Grade Calculation
// Pass or Fail ==> marks <=34 Fail.. else Pass
// Marks greater than equal 35 and less than 55 ==> Grade C
// Marks greater than equal 55 and less than 75 ==> Grade B
// Marks greater than equal 75 and less than 100 ==> Grade A
var marks = 80;
if (marks < 35) {
  console.log(`Failed. Marks: ${marks}`);
} else {
  if (marks >= 35 && marks < 55) {
    console.log(`Congratulation. Marks${marks} Grade: C`);
  } else {
    if (marks >= 55 && marks < 75) {
      console.log(`Congratulation. Marks${marks} Grade: B`);
    } else {
      if (marks >= 75 && marks < 100) {
        console.log(`Congratulation. Marks${marks} Grade: A`);
      } else {
        console.log(`Invalid Marks percentage`);
      }
    }
  }
}
