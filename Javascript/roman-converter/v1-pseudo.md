# Roman Numeral Converter

## Create a function that takes in num as a parameter.

### List all fixed and subtractive Roman numerals and pair them with the corresponding Arabic numerals as the key.

### Create a new variable called *arabicNums* which is an array that contains all the keys of the list.

### Create a new variable called *romanNums* which is an array that contains all the values of the list.
---------------------------
## Create a new recursive function that finds the place value of each number in num.

## This function will also contain default arguments of *result* (an empty array), and *factor* (equal to 1).

### The base case will check if *num* is true (not zero)

### If *num* is true, then *num* will be divided by 10 and its remainder will be multiplied by the *factor*. This calculation will be put into a local variable called *val*.

### *val* will then be placed at the start of the *result* array.

### The function will then return itself (recursive base) with the *num* value divided by 10, and rounded down to the nearest whole number. The function will also take in the newly updated *result* array, and the *factor* multiplied by 10.

### When the base case is met, the *result* array will be returned.

## Create a new function that takes in an array as a parameter, and will map each element in the array to its Roman numeral equivalent. 

This array will be placed into a new variable *eachPlaceValue*