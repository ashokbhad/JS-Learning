const bankSBI = {
  name: "State Bank of India",
  branch: "Jintur",
  IFSC: "SBIN0003423",
};

const bankLocation = {
  city: "Jintur",
  dist: "Parbhani",
  pin: 411511,
};

console.log("1. Create the object -> bankSBI with literals.");
console.log(
  "2. Create the object -> bankLocation with properties city, dist, pin."
);
console.log(
  `3. Clone bankSBI & bankLocation object using 'Object.assign()' method and log.`
);

const objectClone = Object.assign({}, bankSBI, bankLocation);
console.table(objectClone);

const rateOfInterest = {
  homeLoanInterest: 7.8,
  personalLoanInterest: 10.75,
  dueInterest: 10,
};

console.log(
  "4. Create the object -> rateOfInterest with properties homeLoanInterest, personalLoanInterest, dueInterest."
);
console.log(
  `5. Merge bankSBI, bankLocation & rateOfInterest in new Object and log.`
);

const sbiDetails = Object.assign({}, bankSBI, bankLocation, rateOfInterest);
console.table(sbiDetails);
process.stdout.write("-> ");
process.stdout.write(" ");
console.log(
  `The ${sbiDetails.name}(${sbiDetails.IFSC}), city-${sbiDetails.city}, dist-${sbiDetails.dist}, pin-${sbiDetails.pin}`
);
process.stdout.write("    ");
console.log(
  `The ${sbiDetails.name} offers Interest rate of ${sbiDetails.homeLoanInterest}% on Home Loan and ${sbiDetails.personalLoanInterest}% on Personal Loan with upto ${sbiDetails.dueInterest} years of Due Interest.`
);
