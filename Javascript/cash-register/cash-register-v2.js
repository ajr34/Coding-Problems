const toSumInteger = (arr) => {
  let total = 0;
  for (let el of arr) {
    total += el[1] * 100;
  }
  return total;
};

let test = [
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

const findChange = (change, arr) => {
  let result = [];
  let cidReverse = arr.reverse();

  for (let el of cidReverse) {
    // Define accumulator
    let accumulator = [el[0], 0];
    //to Integers
    el[1] = el[1] * 100;
    console.log(el[1]);
    // Values of each currency
    let currencyVals = currencyTable[el[0]];
    let cidVals = el[1];
    console.log(cidVals);
    console.log(currencyVals);

    while (change >= currencyVals && cidVals > 0) {
      // Minus currency val from change
      change -= currencyVals;
      // minus currency val from cid value
      cidVals -= currencyVals;
      accumulator[1] += currencyVals / 100;
    }
    if (accumulator[1] > 0) {
      result.push(accumulator);
    }
  }
  return result;
};

function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  console.log(change);
  let cidTotal = toSumInteger(cid);
  console.log(cidTotal);
  console.log(cid);
  // Define change eaches
  let changeToGive = findChange(change, cid);
  console.log(changeToGive);
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
    // If change is exact
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: changeToGive };
  }
}

//Return OPEN ✔️
console.log(
  checkCashRegister(19.5, 20, [
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

//Return INSUFFICIENT ❌
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

//Return CLOSED ❌
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
