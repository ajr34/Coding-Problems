// List all fixed roman numerals in an object (non-repeating numerals)
const numList = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  // Create variable to hold the result
  let accumulator = "";
  // Loop through each key in the object
  for (const key in numList) {
    // Define the value of each key
    let numVal = numList[key];
    // From a descending order, while the key's value is less than input,
    // decrease input by the key's value and add the key to accumulator.
    while (numVal <= num) {
      num -= numVal;
      accumulator += key;
    }
  }

  return accumulator;
}

convertToRoman(47);

/* E.G.
    47
-   40
------
    07 XL
-   05
------
    02 XLV
-   01
------
    01 XLVI
-   01
------
    00 XLVII
*/
