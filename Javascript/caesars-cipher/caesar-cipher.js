const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWYXZ"];

// Find index of character in string
const findIndex = (char) => {
  return alphabet.findIndex((c) => c === char);
};

// Check if character is a letter or not
const letterChecker = (char) => {
  return alphabet.includes(char);
};

function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    //If character is not a letter, add to result
    if (!letterChecker(str[i])) {
      result += str[i];
    } else {
      // If character is a letter, + or - 13 to its index in the alphabet and add to result
      findIndex(str[i]);
      result +=
        alphabet[findIndex(str[i]) + 13] || alphabet[findIndex(str[i]) - 13];
    }
  }
  return result;
}

rot13("SERR PBQR PNZC");
