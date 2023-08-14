function convertToRoman(num) {
    const numList = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };
  
    function getPlaceVal(num, result = [], factor = 1) {
      if (num) {
        const val = (num % 10) * factor;
        result.unshift(val);
        return getPlaceVal(Math.floor(num / 10), result, factor * 10);
      }
      return result;
    }
  

    const eachPlaceVal = getPlaceVal(num);
    console.log(eachPlaceVal);
    let arabicNums = Object.keys(numList);
    let romanNums = Object.values(numList);
  
    function mapToRoman(arr) {
      let convertedArr = [];
      arr.map((el) => {
        for (let i = 0; i < arabicNums.length; i++) {
          if (el == arabicNums[i]) {
            convertedArr.push(romanNums[i]);
          }
        }
        if (el >= 1 && el < 10) {
          convertedArr.push(onesConvert(el));
        }
        // else if (el >= 60 && el <= 89) {
        //   convertedArr.push(tensConvert(el));
        // } else {
        //   return null;
        // }
      });
      return convertedArr.join("");
    }
  
    function onesConvert(el) {
      let str = "";
      if (el !== 1 && el < 4) {
        for (let i = 0; i < el; i++) {
          str += "I";
        }
        return str;
      } else if (el > 5 && el < 9) {
        str = "V";
        for (let i = 5; i < el; i++) {
          str += "I";
        }
        return str;
      }
      return "";
    }
  
    // function tensConvert(el) {
    //   let str = "LX";
    //   for (let i = 60; i < el; i + 10) {
    //     str += "X";
    //   }
    //   return str;
    // }
  
    return mapToRoman(eachPlaceVal);
  }
  console.log(convertToRoman(81));
  
  //   for (let i = 0; i < arr.length; i++) {
  //     if ((arr[i] = Number(arabicNums[i]))) {
  //       str = romanNums[i];
  //     }
  //   }
  
  //BELOW WORKS!!!!
  
  //     console.log(str);
  //   } else if (arr[i] !== arabicNums[2] && arr[i] < arabicNums[3]) {
  //     for (let j = 5; j < arr[i]; j++) {
  //       //   str = "V";
  //       str += "I";
  //     }
  //     console.log(str);
  //   }
  