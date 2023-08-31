## V2

From the first iteration, there was an issue from the way JS handles floating point calculations - some _change_ values wouldn't be calculated as the calculation was too precise.

This version will convert all number values to integers first for easier calculations.

## Create function _toSumInteger_ to calculate total value of _cid_.

## Create currency table object which contains the value of each currency unit in workable integers (_currencyTable_)

## Create function to find change to give (_findChange_), with _change_ and _array_

- Create empty _result_ array
- Define reverse order of _cid_ (Highest to lowest currency)
- For each element in _cidReverse_
    * Define empty _accumulator_ to equal an array with the currency name and value pair (starting value of 0)
    * Multiply the value of each element in cidReverse by 100 to return integer
    * Define a variable called _currencyVals_ to hold the value of each currency unit based on _currencyTable_ object.
    * Define a variable called _cidVals_ to hold the value of each currency unit based on _cid_.

    * While _change_ is over or equal to _currencyVals_ AND _cidVals_ is over 0;
        * Subtract and assign _change_ with _currencyVals_
        * Subtract and assign _cidVals_ with _currencyVals_
        * Add and assign _accumulator_ value to _currencyVals_ divided by 100
        * if _accumulator_ values are over 0
        * Push _accumulator_ to _result_
        * Return _result_

## Create _checkCashRegister_ function to take in parameters of _price_, _cash_ and _cid_

- Subtract (_price_ _ 100) from (*cash* _ 100) and determine the change to be given (_change_).
- Define _cidTotal_ variable by invoking _toSumInteger_ with _cid_ as argument
- Define _changeToGive_ variable by invoking _findChange_ with _change_ and _cid_ as arguments.

- If _change_ is over _cidTotal_
  -- return insufficient object ({ status: "INSUFFICIENT_FUNDS", change: [] })
- Else if _change_ is equal to _cidTotal_
  -- return closed object ({ status: "CLOSED", change: _cid_ })
- Else
  -- return open object ({ status: "OPEN", change: _changeToGive_ })
