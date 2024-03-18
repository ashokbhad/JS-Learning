function gradeCalculation(marks) {
  // invalid inputs
  if (marks == null || marks <= 0 || isNaN(+marks)) {
    console.log(`Invalid input: ${marks}`);
  } else {
    console.log(`Valid input : ${marks}`);
  }
}
gradeCalculation(null);
gradeCalculation(0);
gradeCalculation(-20);
gradeCalculation("Seventy"); // NaN
gradeCalculation("70"); // 70
