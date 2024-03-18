var isEligibleToVote = function (age) {
  if (age <= 0 || age > 130 || isNaN(age) || age === null) {
    console.log("Eligible for voting");
    return false;
  } else if (age < 18) {
    console.log("Not eligible for voting");
    return false;
  } else {
    console.log("Eligible for voting");
    return true;
  }
};

// Test cases
console.log(isEligibleToVote(47)); // true
console.log(isEligibleToVote(15)); // false
console.log(isEligibleToVote(6)); // false
console.log(isEligibleToVote(30)); // true
console.log(isEligibleToVote(-20)); // false
console.log(isEligibleToVote(300)); // false
console.log(isEligibleToVote(0)); // false
console.log(isEligibleToVote(null)); // false
