# Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

---

EXAMPLE CASH-IN-DRAWER ARRAY
[
["PENNY", 1.01],
["NICKEL", 2.05],
["DIME", 3.1],
["QUARTER", 4.25],
["ONE", 90],
["FIVE", 55],
["TEN", 20],
["TWENTY", 60],
["ONE HUNDRED", 100]
]

EACH CURRENCY VALUE
[
["ONE HUNDRED", 100]
["TWENTY", 20],
["TEN", 10],
["FIVE", 5],
["ONE", 1],
["QUARTER", 0.25],
["DIME", 0.10],
["NICKEL", 0.05],
["PENNY", 0.01],
]

---

## First subtract _price_ from _cash_ and determine the change to be given (_change_).

> E.G.  
> cash 20.00  
> price 19.50  
> change 00.50

## Create currency value array (_currencyTable_) which states the value of each currency (e.g. penny: 0.01, nickel: 0.05)

## Create a function that checks whether change is available in cash-in-drawer (_cid_).

- If change is equal to exact amount available in cid, return {status: "CLOSED", change: [cid]}

Else...

## Create a function to check what currencies are needed to give out the correct change

- Create empty _accumulator_ array
- For each element in the _currencyTable_
  - While currency is less than or equal to _change_
    - Change - currency value
    - Push the element (currency & value) to accumulator array
- Return _accumulator_ array

## Create a function to sum all repeating currency values from accumulator array

- Create empty _result_ array
- Count how many times each element appears in accumulator array
  - If it appears more than once
    - Multiply the value (element[1]) by the amount of times it appears in the array
    - Push the element with the new multiplied value to _result_ array
- Return _result_ array

## Create a function to find out if each element in _result_ array is less than or equal to _cid_ array.