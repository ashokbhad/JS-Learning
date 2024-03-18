function gradeCalculation(marks) {
  if (marks >= 90) {
    console.log(`Fantastic marks: ${marks}, Your grade is A+`);
  } else if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks ${marks}, your grade is A`);
  } else if (marks >= 50 && marks < 75) {
    console.log(`Good marks ${marks}, your grade is B`);
  } else if (marks >= 35 && marks < 50) {
    console.log(`Marks is ${marks}, your grade is C, Need improvement`);
  } else {
    console.log("Please provide the valid marks");
  }
  console.log("%c===============================", "color: purple");
}

// Invoking function for values
gradeCalculation(99);
gradeCalculation(82);
gradeCalculation(92);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-8);
gradeCalculation(35);
gradeCalculation(28);
gradeCalculation(63);
gradeCalculation(47);
gradeCalculation("93");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
