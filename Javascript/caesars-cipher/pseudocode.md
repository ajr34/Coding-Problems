# Caesars Cipher

**All letters will be uppercase. non-alphabetic characters need to remain the same as from input.

## Create an array of the alphabet for the string to match (*alphabetArr*).

## Create a function that finds the index of each letter in *str*. The function takes in a source (*str*) and target (*alphabetArr*) as parameters.

- Create an empty array which will hold the index of string letters in the alphabet (*sourceAlphabetIndex*).

- Iterate through the length of *source*.

    --  for each letter of *target*, if the letter is equal to the current element in *source*, push the index of that letter in the alphabet into *sourceAlphabetIndex*.

- Return *sourceAlphabetIndex*


## Create a function that will convert the index of each element in *sourceAlphabetIndex* to the correct index before decoding.

** This function will effectively minus 13 from each number in the array. 