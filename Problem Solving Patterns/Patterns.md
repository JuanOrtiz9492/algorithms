# Solvin Patterns

## Frecuency Pattern

this pattern uses objects or sets to store frecuency of data in order to avoid O^2 complexity

**Example**

writte a function that takes 2 arrays and then evaluate if the values of the first array correspond to the square of the values in the second array
[frecuecny Pattern](./frecunecyPattern.js)

## Multiple Pointers

we create pointers that will represent the position in an array and we will move it according to certain condition

**Example**

Write a funtion that will take a sorted array of integers and will return the first pair that its sum equals to zero
[multiplePointers | sumZero](./multiplePointers.js)

Write a function that recieves a sorted array of integers and return the number of unique values in it
[multiplePointers | countUniqueValues](./multiplePointers.js)

## Sliding Window

for this pattern we will create a window that can be a array or a number and we will move it through the array
this window depending on a certain condition

**Example**

write a function that takes 2 arguments an array and a integer and find the max sum of numbers in secuence, the amount of the numbers
to be sumed is determined by the second argument

[3,5,7,0,2,5,6], 2 -> 13
for the previous dataset the expected answer is **13**, because the sum of **5** and **7** will give the max sum of **2** numbers in sequence

[sliding window](./slidingWindow.js)

## Divide and Conquer

this pattern involves dividing a dataset into samller chunks and then repeating a process with a subset of data. this pattern can tremendously
decrease time complexity

**Example**
implement a function that takes two parameters a sorted array and a integer and then return the position of the value in the array
[divide  and conquer](./divideAndConquer.js)