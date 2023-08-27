//Test cid below
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// Array of each currency value
let currencyTable = [
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
];

// Check what currencies are needed to give correct change
const currencyCheck = (num) => {
  let accumulator = [];
  for (let i = 0; i < currencyTable.length; i++) {
    let currencyVals = currencyTable[i][1];
    while (currencyVals <= num) {
      num -= currencyVals;
      accumulator.push(currencyTable[i]);
    }
  }
  return accumulator;
};

// Array of currencies needed to give change
let changeEaches = currencyCheck(5.25);

const cidUpdate = (arr) => {
  const cidCopy = [...cid];
  // Iterate each element in cid
  for (let i = 0; i < cid.length; i++) {
    let cidKey = cidCopy[i][0];
    let cidVal = cidCopy[i][1];
    // Iterate each change element to cid element
    for (let j = 0; j < arr.length; j++) {
      let changeKey = arr[j][0];
      let changeVal = arr[j][1];
      // If changeKey is the same as cidKey, replace cidVal by decrement cidVal by changeVal
      if (changeKey == cidKey) {
        let newVal = (cidVal -= changeVal);
        cidCopy[i].splice(1, 1, newVal);
      }
    }
  }
  return cidCopy;
};

// Resulting cid when change is deducted
let cidToMatch = cidUpdate(changeEaches);







// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
