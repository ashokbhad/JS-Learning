// Function to calculate the square of the length of a word
function squareOfWordLength(word) {
  const length = word.length;
  const square = length * length;
  return square;
}

// Function to perform calculations on a given string
function performStringCalculations() {
  const str = "I am Angular Developer";
  const words = str.split(" ");
  const totalWords = words.length;
  const totalCharacters = str.length;

  // Calculate and log the result of dividing string length by total number of words
  const averageLength = totalCharacters / totalWords;
  console.log("Average length of words:", averageLength);

  // Calculate and log the result of multiplying string length by total number of words
  const multipliedLength = totalCharacters * totalWords;
  console.log(
    "Multiplication of string length and total words:",
    multipliedLength
  );
}

// Invoking the squareOfWordLength function for the provided strings
console.log("Square of 'JavaScript' length:", squareOfWordLength("JavaScript"));
console.log(
  "Square of 'Google Chrome' length:",
  squareOfWordLength("Google Chrome")
);
console.log(
  "Square of 'Developer Smart' length:",
  squareOfWordLength("Developer Smart")
);

// Invoking the performStringCalculations function
performStringCalculations();
