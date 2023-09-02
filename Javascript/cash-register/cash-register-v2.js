let currencyTable = {
  "ONE HUNDRED": 10000,
  TWENTY: 2000,
  TEN: 1000,
  FIVE: 500,
  ONE: 100,
  QUARTER: 25,
  DIME: 10,
  NICKEL: 5,
  PENNY: 1,
};

const toSumInteger = (arr) => {
  let total = 0;
  for (let el of arr) {
    total += el[1] * 100;
  }
  return total;
};

const findChange = (change, arr) => {
  let result = [];
  let cidReverse = arr.reverse();

  for (let el of cidReverse) {
    // Define accumulator
    let accumulator = [el[0], 0];
    // Convert cid vals to integers
    el[1] = el[1] * 100;
    // Define vals as variables
    let currencyVal = currencyTable[el[0]];
    let cidVal = el[1];
    while (change >= currencyVal && cidVal > 0) {
      // Minus currency val from change
      change -= currencyVal;
      // minus currency val from cid value
      cidVal -= currencyVal;
      accumulator[1] += currencyVal / 100;
    }
    if (accumulator[1] > 0) {
      result.push(accumulator);
    }
  }
  return result;
};

const checkCashRegister = (price, cash, cid) => {
  // Define change as integer
  let changeInt = cash * 100 - price * 100;
  // Define cid total as integer
  let cidTotal = toSumInteger(cid);

  // If change is over cid total
  if (changeInt > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
    // If change is exact
  } else if (changeInt === cidTotal) {
    return { status: "CLOSED", change: cid };
    // If change is available in cid (change is less than total)
  } else {
    // Define change to give in each currency available from cid
    let changeToGive = findChange(changeInt, cid);
    // Define the sum of intended change to give (used to catch any errors from findChange() calculations)
    const sumChangeToGive = changeToGive.reduce(
      (acc, curr) => acc + curr[1],
      0
    );
    // If change is the same as calculated sum of change to give
    if (changeInt / 100 == sumChangeToGive.toFixed(2))
      return { status: "OPEN", change: changeToGive };
  }
  // If change doesn't match the sum of change to give
  return { status: "INSUFFICIENT_FUNDS", change: [] };
};

//Return OPEN ✔️
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

//Return INSUFFICIENT ✔️
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

//Return INSUFFICIENT ✔️
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

//Return CLOSED ✔️
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
