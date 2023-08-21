# Caesars Cipher

**All letters will be uppercase. non-alphabetic characters need to remain the same as from input.

## Create an array of the alphabet for the string to match (*alphabet*).

## Create a function that finds the index of a letter in *str*.

## Create a function that will check if a character is a letter or not.
- Return true or false

## Create a function that will decode *str*.

- Create accumulator variable called *result*

- Loop through each character in *str*
    -- if character is not a letter, add to *result*
    -- else, find the index of that character in the alphabet. 
    -- Add or subtract 13 to that given index and add to *result*.

- Return *result*