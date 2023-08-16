# Roman Numeral Converter

## Create a function that takes in *num* as a parameter.

- Create a series of objects with each containing all possible Roman numeral combinations by its place value (ones, tens, hundreds, thousands). Pair each Roman numeral with their corresponding Arabic numeral as the key.
-------
## Create a new recursive function that finds the place value of each number in *num*.

- This function will also contain default arguments of *result* (an empty array), and *factor* (equal to 1).

    -- The base case will check if *num* is true (not zero)

    -- If *num* is true, then *num* will be divided by 10 and its remainder will be multiplied by the *factor*. This calculation will be put into a local variable called *val*.

    -- *val* will then be placed at the start of the *result* array.

    -- The function will then return itself (recursive base) with the *num* value divided by 10, and rounded down to the nearest whole number. The function will also take in the newly updated *result* array, and the *factor* multiplied by 10.

- When the base case is met, the *result* array will be returned.
-------
## Create a function that takes in an array as a parameter, and it will map each *element* in the array to its Roman numeral equivalent. 

- Create a variable called *convertedArray* which is an empty array that will hold the converted Roman values.

- Test each element's range to find its place value.
    
    -- If *element* is >= 1000 AND <= 3000, iterate through each key in the *thousands* object. When *element* matches the key, push the key's value to the end of *convertedArr*.

    -- Else if *element* is >= 100 AND <= 900, iterate through each key in the *hundreds* object. When *element* matches the key, push the key's value to the end of *convertedArr*.

    -- Else if *element* is >= 10 AND <= 90, iterate through each key in the *tens* object. When *element* matches the key, push the key's value to the end of *convertedArr*.

    -- Else, *element* is >= 1 AND <= 9, iterate through each key in the *ones* object. When *element* matches the key, push the key's value to the end of *convertedArr*.

- Return convertedArr and join values to string with no spaces.