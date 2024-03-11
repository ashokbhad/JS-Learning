console.log("%c----------- Assignment No_02 -----------", "color: chocolate");
function bankDetails(bankName, bankAccountNo, banklocation, bankpinCode) {
  console.log("%cBank Name is        : ", "color: purple", bankName);
  console.log("%cBank Account Number : ", "color: green", bankAccountNo);
  console.log("%cBank Location is    : ", "color: red", banklocation);
  console.log("%cBank PinCode is     : ", "color: pink", bankpinCode);
  console.log("%c=================================", "color: yellow");
}
bankDetails("SBI Bank", 1234567890, "PUNE", 418093);
bankDetails("AXIS Bank", 7687654534, "MUMBAI", 415437);
bankDetails("HDFC Bank", 675456765, "KOLHAPUR", 415675);
bankDetails("BOI Bank", 1235465435, "SANGLI", 412345);
