// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  //Start coding here
  // Remove trailing spaces
  const wordArray = s.trim().split(/(\s+)/);

  // Split the string into words using space as the separator
  const last = wordArray.length - 1;

  // Return the length of the last word
  if (wordArray[last] === "") {
    return 0;
  } else {
    return wordArray[last].length;
  }
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
