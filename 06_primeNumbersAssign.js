function spaceCount(strings) {
  const spaceCounts = [];
  for (let i = 0; i < strings.length; i++) {
    let count = 0;
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === " ") {
        count++;
      }
    }
    spaceCounts.push(count);
  }
  return spaceCounts;
}

// Test
const strings = [
  "Revision is the success of mother",
  "JavaScript is the language of internet world",
];
console.log("Number of spaces in string:", spaceCount(strings));
