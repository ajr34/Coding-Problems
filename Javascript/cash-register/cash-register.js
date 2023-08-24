let drawer = [
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

const currencyCheck = (change) => {
  let accumulator = [];
  currencyTable.forEach((currency) => {
    let currencyVals = currency[1];
    while (currencyVals <= change) {
      change -= currencyVals;
      accumulator.push(currency);
    }
  });
  return accumulator;
  /*
accumulator equals to (5.74 as change):
  [ [ 'FIVE', 5 ],
  [ 'QUARTER', 0.25 ],
  [ 'QUARTER', 0.25 ],
  [ 'DIME', 0.1 ],
  [ 'DIME', 0.1 ],
  [ 'PENNY', 0.01 ],
  [ 'PENNY', 0.01 ],
  [ 'PENNY', 0.01 ],
  [ 'PENNY', 0.01 ] ]
*/
};
let currencyForChange = currencyCheck(5.74);


//Sum repeating currencies from currencyCheck() function 
const sumCurrency = (arr, element) => {
  return arr.filter((item) => item == element).length;
};

let test = sumCurrency(currencyForChange, currencyForChange[1]);

/*
test will equal to 2: the amount of times "[ 'QUARTER', 0.25 ]" appears in currencyForChange array.
*/


// ----------------------------------
// function checkCashRegister(price, cash, cid) {
//   let change;
//   return change;
// }

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
