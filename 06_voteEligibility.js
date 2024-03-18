var isEligibleToVote = function (age) {
  if (age <= 0 || age > 130 || isNaN(age) || age === null) {
    console.log("%cEligible for voting", "color: green");
    return false;
  } else if (age < 18) {
    console.log("%cNot eligible for voting", "color: red");
    return false;
  } else {
    console.log("%cEligible for voting", "color: green");
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
