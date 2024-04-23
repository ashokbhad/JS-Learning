// Jenny: Solve the homework by own
function jennyHomeWork(callbacks) {
  console.log(`Jenny started homework...`);
  console.log(`Jenny took sometime let's consider 2 hours...`);
  console.log(`Finally Jenny completed homework...`);
  callbacks();
}

// Elon: Copy homework from Jenny
let elonCopyHomeWork = function () {
  console.log(`Playing Cricket`);
  console.log(`Copying homework `);
  console.log(`After 10 min, Elon copied all homework `);
};
jennyHomeWork(elonCopyHomeWork);
