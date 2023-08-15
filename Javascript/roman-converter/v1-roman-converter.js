const numList = {
  ones: {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  },
  tens: {
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
  },
  hundreds: {
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
  },
  thousands: {
    1000: "M",
    2000: "MM",
    3000: "MMM",
  },
};

const getPlaceVal = (num, result = [], factor = 1) => {
  if (num) {
    const val = (num % 10) * factor;
    result.unshift(val);
    return getPlaceVal(Math.floor(num / 10), result, factor * 10);
  }
  return result;
};

const mapToRoman = (arr) => {
  const convertedArr = [];
  arr.map((el) => {
    for (const obj in numList) {
      for (const [key, value] of Object.entries(numList[obj])) {
        if (el == key) {
          convertedArr.push(value);
        }
      }
    }
  });
  return convertedArr;
};

function convertToRoman(num) {
  let numPlaceVals = getPlaceVal(num);
  let result = mapToRoman(numPlaceVals).join("");

  return result
}

convertToRoman(36);
